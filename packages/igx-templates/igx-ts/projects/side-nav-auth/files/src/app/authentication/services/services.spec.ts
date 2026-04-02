import { HttpHandler, HttpResponse } from '@angular/common/http';
import { PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FacebookProvider } from '../providers/facebook-provider';
import { GoogleProvider } from '../providers/google-provider';
import { MicrosoftProvider } from '../providers/microsoft-provider';
import { Authentication } from './authentication';
import { ExternalAuthProvider, AUTH_BASE_PATH } from './external-auth-configs';
import { ExternalAuthRedirectUrl, ExternalAuth } from './external-auth';
import { BackendInterceptor } from './fake-backend';
import * as JWTUtil from './jwt-util';
import { LocalStorageService } from './local-storage';
import msKeys from './microsoft-keys';
import { UserStore } from './user-store';

describe('Services', () => {

  afterEach(() => { vi.restoreAllMocks(); });

  describe('Authentication Service', () => {
    const MOCK_HTTP_CLIENT = {
      post: () => { }
    } as any;

    const authServ = new Authentication(MOCK_HTTP_CLIENT);
    it('Should properly initialize', async () => {
      expect(authServ).toBeDefined();
    });
    it(`Should properly call 'login'`, async () => {
      const loginPostSpy = vi.spyOn(authServ as any, 'loginPost').mockResolvedValue(undefined);
      const dummyData = { email: 'Dummy', password: 'Data' };
      await authServ.login(dummyData);
      expect(loginPostSpy).toHaveBeenCalled();
      expect(loginPostSpy).toHaveBeenCalledWith('/login', dummyData);
    });
    it(`Should properly call 'register'`, async () => {
      const loginPostSpy = vi.spyOn(authServ as any, 'loginPost').mockResolvedValue(undefined);
      const dummyData = { given_name: 'Testy', family_name: 'Testington', email: 'Dummy', password: 'Data' };
      await authServ.register(dummyData);
      expect(loginPostSpy).toHaveBeenCalled();
      expect(loginPostSpy).toHaveBeenCalledWith('/register', dummyData);
    });
    it(`Should properly call 'loginWith'`, async () => {
      const loginPostSpy = vi.spyOn(authServ as any, 'loginPost').mockResolvedValue(undefined);
      const dummyData = { id: 'Test', name: 'Testy', email: 'Dummy', externalToken: 'Data' };
      await authServ.loginWith(dummyData);
      expect(loginPostSpy).toHaveBeenCalled();
      expect(loginPostSpy).toHaveBeenCalledWith('/extlogin', dummyData);
    });
    it(`Should properly call 'loginPost'`, async () => {
      const loginPostSpy = vi.spyOn(authServ as any, 'loginPost');
      const dummyData = { email: 'Dummy', password: 'Data' };
      const mockUser = { name: 'Test User', email: 'Dummy' };
      const mockToken = `${JWTUtil.encodeBase64Url({ alg: 'Mock', typ: 'JWT' })}.${JWTUtil.encodeBase64Url(mockUser)}.mockSignature`;
      const mockObs = { toPromise: () => { } };
      vi.spyOn(mockObs, 'toPromise').mockReturnValue(mockToken as any);
      vi.spyOn(MOCK_HTTP_CLIENT, 'post').mockReturnValue(mockObs);
      const result = await authServ.login(dummyData);
      expect(loginPostSpy).toHaveBeenCalledWith('/login', dummyData);
      expect(MOCK_HTTP_CLIENT.post).toHaveBeenCalledWith('/login', dummyData);
      expect(result).toEqual({ user: { ...mockUser, token: mockToken } });
    });
    it(`Should properly call 'loginPost' and throw error`, async () => {
      const dummyData = { email: 'Dummy', password: 'Data' };
      const mockObs = { toPromise: () => { } };
      vi.spyOn(mockObs, 'toPromise').mockImplementation(() => {
        throw new Error('Test Error');
      });
      vi.spyOn(MOCK_HTTP_CLIENT, 'post').mockReturnValue(mockObs);
      expect(await (authServ as any).loginPost(dummyData)).toEqual({ error: 'Test Error' });
      expect(MOCK_HTTP_CLIENT.post).toHaveBeenCalled();
    });
  });

  describe('External Authentication Service', () => {
    const MOCK_OIDC_SECURITY = {} as any;
    const MOCK_ROUTER = {} as any;
    const MOCK_LOCATION = {
      prepareExternalUrl: () => { }
    } as any;

    const localStorage = new LocalStorageService(PLATFORM_ID);
    const extAuthServ = new ExternalAuth(MOCK_ROUTER, MOCK_OIDC_SECURITY, MOCK_LOCATION, localStorage);
    it(`Should properly initialize`, () => {
      expect(extAuthServ).toBeDefined();
    });
    it(`Should properly get/set 'activeProvider'`, () => {
      vi.spyOn(localStorage, 'getItem').mockReturnValue('test');
      const testProvider = extAuthServ.activeProvider;
      expect(localStorage.getItem).toHaveBeenCalled();
      expect(localStorage.getItem).toHaveBeenCalledWith('extActiveProvider');
      expect(testProvider).toEqual('test');
      vi.spyOn(localStorage, 'setItem');
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
      const providersSpy = vi.spyOn((extAuthServ as any).providers, 'set');
      extAuthServ.addGoogle();
      expect(providersSpy).toHaveBeenCalled();
      expect(providersSpy).toHaveBeenCalledWith('Google',
        new GoogleProvider(MOCK_OIDC_SECURITY, ExternalAuthProvider.Google));
    });

    it(`Should properly call 'addFacebook'`, () => {
      const providersSpy = vi.spyOn((extAuthServ as any).providers, 'set');
      const configParams = {
        client_id: 'test',
        redirect_url: `/${AUTH_BASE_PATH}/${ExternalAuthRedirectUrl.Facebook}`
      } as any;
      extAuthServ.addFacebook('test');
      expect(providersSpy).toHaveBeenCalled();
      expect(providersSpy).toHaveBeenCalledWith('Facebook',
        new FacebookProvider(configParams, MOCK_ROUTER));
    });

    it(`Should properly call 'addMicrosoft'`, () => {
      const providersSpy = vi.spyOn((extAuthServ as any).providers, 'set');
      extAuthServ.addMicrosoft();
      expect(providersSpy).toHaveBeenCalled();
      expect(providersSpy).toHaveBeenCalledWith('Microsoft',
        new MicrosoftProvider(MOCK_OIDC_SECURITY, ExternalAuthProvider.Microsoft));
    });

    it(`Should properly call 'getUserInfo'`, async () => {
      const providersMap = new Map<any, any>();
      const mockObj = {
        getUserInfo: () => {
          return { name: 'test' };
        }
      };
      vi.spyOn(mockObj, 'getUserInfo');
      const providersGetSpy = vi.spyOn(providersMap, 'get').mockReturnValue(false as any);
      providersMap.set(ExternalAuthProvider.Facebook, mockObj);
      (extAuthServ as any).providers = providersMap;
      await expect(extAuthServ.getUserInfo(ExternalAuthProvider.Facebook)).rejects.toBeNull();
      expect(providersGetSpy).toHaveBeenCalledTimes(1);
      providersGetSpy.mockReturnValue(mockObj as any);
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
      vi.spyOn(mockObj, 'login');
      const providersGetSpy = vi.spyOn(providersMap, 'get').mockReturnValue(false as any);
      providersMap.set(ExternalAuthProvider.Facebook, mockObj);
      (extAuthServ as any).providers = providersMap;
      const setActiveProvider = vi.spyOn(extAuthServ, 'activeProvider', 'set');
      extAuthServ.login(ExternalAuthProvider.Facebook);
      expect(mockObj.login).not.toHaveBeenCalled();
      expect(setActiveProvider).not.toHaveBeenCalled();
      providersGetSpy.mockReturnValue(mockObj);
      extAuthServ.login(ExternalAuthProvider.Facebook);
      expect(mockObj.login).toHaveBeenCalled();
      expect(setActiveProvider).toHaveBeenCalledWith(ExternalAuthProvider.Facebook);
    });

    it(`Should properly call 'logout'`, () => {
      const providersMap = new Map<any, any>();
      const mockObj = {
        logout: () => { }
      } as any;
      vi.spyOn(mockObj, 'logout');
      providersMap.set(ExternalAuthProvider.Facebook, mockObj);
      vi.spyOn(providersMap, 'get').mockReturnValue(mockObj);
      (extAuthServ as any).providers = providersMap;
      const setActiveProviderSpy = vi.spyOn(extAuthServ, 'activeProvider', 'get').mockReturnValue(false as any);
      extAuthServ.logout();
      expect(mockObj.logout).not.toHaveBeenCalled();
      expect(providersMap.get).not.toHaveBeenCalled();
      expect(setActiveProviderSpy).toHaveBeenCalledTimes(1);
      setActiveProviderSpy.mockReturnValue('MOCK TOKEN' as any);
      extAuthServ.logout();
      expect(mockObj.logout).toHaveBeenCalled();
      expect(providersMap.get).toHaveBeenCalled();
      expect(providersMap.get).toHaveBeenCalledWith('MOCK TOKEN');
      expect(setActiveProviderSpy).toHaveBeenCalledTimes(3);
    });

    it(`Should properly call 'getAbsoluteUrl'`, () => {
      const currentOrigin = window.location.origin;
      vi.spyOn(MOCK_LOCATION, 'prepareExternalUrl').mockReturnValue('test_href_2');
      expect((extAuthServ as any).getAbsoluteUrl('mock_path')).toEqual(`${currentOrigin}test_href_2`);
      expect(MOCK_LOCATION.prepareExternalUrl).toHaveBeenCalledWith('mock_path');
    });
  });

  describe(`MOCK Backend Service`, () => {
    describe(`public`, () => {
      it(`Should properly call 'intercept'`, () => {
        const mockLocalStorage: LocalStorageService = new LocalStorageService({});
        const provider = new BackendInterceptor(mockLocalStorage);
        const mockRequest = {
          method: 'POST',
          url: '/login',
          version: 'test'
        } as any;
        const mockUsers: any[] = [];
        const mockNext = {
          handle: () => new Observable<any>()
        } as HttpHandler;
        // endpoint /login

        // mocked method in intercept still need to return observable, otherwise rxjs pipe throws
        vi.spyOn(provider, 'loginHandle').mockReturnValue(new Observable());
        vi.spyOn(JSON, 'parse').mockReturnValue(mockUsers);
        vi.spyOn(mockLocalStorage, 'getItem').mockReturnValue('[]');
        provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
        expect(JSON.parse).toHaveBeenCalledWith('[]');
        expect(JSON.parse).toHaveBeenCalledTimes(1);
        expect(provider.loginHandle).toHaveBeenCalledWith(mockRequest);
        expect(provider.loginHandle).toHaveBeenCalledTimes(1);
        // endpoint /register
        mockRequest.url = '/register';
        const getStorageUserSpy = vi.spyOn(provider as any, 'getStorageUser').mockReturnValue({ name: 'Mock user' });
        vi.spyOn(provider, 'registerHandle').mockReturnValue(new Observable());
        provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
        expect(JSON.parse).toHaveBeenCalledTimes(2);
        expect(getStorageUserSpy).toHaveBeenCalledWith(mockRequest);
        expect(getStorageUserSpy).toHaveBeenCalledTimes(1);
        expect(provider.registerHandle).toHaveBeenCalledWith({ name: 'Mock user' } as any);
        expect(provider.registerHandle).toHaveBeenCalledTimes(1);
        // endpoint /register
        mockRequest.url = '/extlogin';
        const getStorageExtUserSpy = vi.spyOn(provider as any, 'getStorageExtUser').mockReturnValue({ name: 'Mock user' });
        provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
        expect(JSON.parse).toHaveBeenCalledTimes(3);
        expect(getStorageExtUserSpy).toHaveBeenCalledWith(mockRequest);
        expect(getStorageExtUserSpy).toHaveBeenCalledTimes(1);
        expect(provider.registerHandle).toHaveBeenCalledWith({ name: 'Mock user' } as any, true);
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
        vi.spyOn(mockNext, 'handle');
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
        const provider = new BackendInterceptor(new LocalStorageService({}));
        const localStorage = (provider as any).localStorage;
        const mockUser = {
          email: 'test_user'
        } as any;
        provider.users = [mockUser];
        let output;
        let expectedOutput = { error: { message: 'Account with email "test_user" already exists' } } as any;
        provider.registerHandle(mockUser, false).pipe(take(1)).subscribe(() => { }, (e) => { output = e; });
        expect(output).toEqual(expectedOutput);

        vi.spyOn(localStorage, 'setItem');
        vi.spyOn(JSON, 'stringify').mockReturnValue('MOCK OBJ');
        const generateBodySpy = vi.spyOn(provider as any, 'getUserJWT').mockReturnValue('MOCK BODY');
        const tokenSpy = vi.spyOn(provider as any, 'generateToken').mockReturnValue('MOCK TOKEN');
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
        const provider = new BackendInterceptor(new LocalStorageService({}));
        const mockUser = {
          email: 'test_email'
        } as any;
        provider.users = [mockUser];
        const mockRequest = {
          body: {
            email: 'test_email'
          }
        } as any;
        vi.spyOn(Array.prototype, 'find');
        const jwtSpy = vi.spyOn(provider as any, 'getUserJWT').mockReturnValue('MOCK BODY');
        const tokenSpy = vi.spyOn(provider as any, 'generateToken').mockReturnValue('MOCK TOKEN');
        const expectedOutput = new HttpResponse({ status: 200, body: 'MOCK TOKEN' });
        provider.loginHandle(mockRequest).pipe(take(1)).subscribe((e) => {
          expect(e).toEqual(expectedOutput);
        });
        expect(jwtSpy).toHaveBeenCalledWith(mockUser);
        expect(tokenSpy).toHaveBeenCalledWith('MOCK BODY');

        const expectedError = { status: 401, error: { message: 'User does not exist!' } };
        (provider.loginHandle({ body: { email: 'missing user' } } as any) as any).pipe(take(1))
          .subscribe(() => { }, (e: any) => {
            expect(e).toEqual(expectedError);
          }, () => { });
      });
    });

    describe(`private`, () => {
      it(`Should properly call 'getStorageUser'`, () => {
        const provider = new BackendInterceptor(new LocalStorageService({}));
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
        const provider = new BackendInterceptor(new LocalStorageService({}));
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
        const provider = new BackendInterceptor(new LocalStorageService({}));
        const mockInput = {
          name: 'test_name',
          given_name: 'test_given_name',
          family_name: 'test_family_name',
          email: 'test_email',
          picture: 'test_picture'
        };
        vi.spyOn(Math, 'floor').mockReturnValue(1000);
        vi.spyOn(Date.prototype, 'getTime').mockReturnValue(1000);
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
        const provider = new BackendInterceptor(new LocalStorageService({}));
        const inputString = 'testString1';
        const expectedOutput = `${JWTUtil.encodeBase64Url({ alg: 'Mock', typ: 'JWT' })}.${JWTUtil.encodeBase64Url(inputString)}.mockSignature`;
        expect((provider as any).generateToken(inputString)).toEqual(expectedOutput);
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
    const localStorage = new LocalStorageService(PLATFORM_ID);

    beforeEach(() => {
      vi.spyOn(JSON, 'parse').mockReturnValue(mockUser);
      vi.spyOn(localStorage, 'getItem').mockReturnValue('MOCK JSON');
    });

    it(`Should properly initialize`, () => {
      const userServ = new UserStore(localStorage);
      expect(userServ).toBeDefined();
      expect(localStorage.getItem).toHaveBeenCalledWith('currentUser');
      expect(JSON.parse).toHaveBeenCalledWith('MOCK JSON');
      // get current user
      expect(userServ.currentUser).toEqual(mockUser);
    });

    it(`Should properly get 'initials'`, () => {
      const userServ = new UserStore(localStorage);
      const currentUserSpy = vi.spyOn(userServ, 'currentUser', 'get').mockReturnValue(null as any);
      expect(userServ.initials).toEqual(null);
      currentUserSpy.mockReturnValue({ given_name: '' } as any);
      expect(userServ.initials).toEqual('');
      currentUserSpy.mockReturnValue({ given_name: '', family_name: '' } as any);
      expect(userServ.initials).toEqual('');
      currentUserSpy.mockReturnValue({ given_name: '', family_name: 'g' } as any);
      expect(userServ.initials).toEqual('g');
      currentUserSpy.mockReturnValue({ given_name: 'h3ll0' } as any);
      expect(userServ.initials).toEqual('h');
      currentUserSpy.mockReturnValue({ given_name: 'h3ll0', family_name: 'g' } as any);
      expect(userServ.initials).toEqual('hg');
      currentUserSpy.mockReturnValue({ given_name: 'h3ll0', family_name: '' } as any);
      expect(userServ.initials).toEqual('h');
    });

    it(`Should properly 'setCurrentUser'`, () => {
      const userServ = new UserStore(localStorage);
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
      vi.spyOn(JSON, 'stringify').mockReturnValue('MOCK STRING');
      vi.spyOn(localStorage, 'setItem');
      userServ.setCurrentUser(mockUser2);
      expect(userServ.currentUser).toEqual(mockUser2);
      expect(JSON.stringify).toHaveBeenCalledWith(mockUser2);
      expect(localStorage.setItem).toHaveBeenCalledWith('currentUser', 'MOCK STRING');
      userServ.setCurrentUser(mockUser);
      expect(userServ.currentUser).toEqual(mockUser);
    });

    it(`Should properly call 'clearCurrentUser'`, () => {
      const userServ = new UserStore(localStorage);
      vi.spyOn(localStorage, 'removeItem');
      expect(userServ.currentUser).toBeTruthy();
      userServ.clearCurrentUser();
      expect(localStorage.removeItem).toHaveBeenCalledWith('currentUser');
      expect(userServ.currentUser).toEqual(null);
    });
  });
});

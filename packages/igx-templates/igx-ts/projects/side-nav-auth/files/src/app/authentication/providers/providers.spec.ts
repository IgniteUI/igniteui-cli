import { of } from 'rxjs';
import { FacebookProvider } from './facebook-provider';
import { GoogleProvider } from './google-provider';
import { MicrosoftProvider } from './microsoft-provider';

describe('Providers', () => {
  const MOCK_EXTERNAL_AUTH_CONFIG = {
    configId: 'test-config-id',
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
  const MOCK_OIDC_SECURITY = {
    authorize: () => { },
    getAccessToken: () => '',
    logoff: () => { },
    userData$: of({ allUserData: [] })
  } as any;

  afterEach(() => { vi.restoreAllMocks(); });

  describe('Facebook Provider', () => {
    const facebookProviderName = 'FB';
    let mockResponse: any = {};
    let mockAPIObj = {
      id: 'mock-id',
      name: 'mock-name',
      first_name: 'mock-first_name',
      last_name: 'mock_last_name',
      email: 'mock_email',
      picture: 'mock_picture'
    };
    globalThis[facebookProviderName] = {
      login: (callback: any) => { callback({ authResponse: mockResponse }); },
      init: () => {},
      api: (paramsOrCb: any, cb?: any) => {
        const callback = typeof paramsOrCb === 'function' ? paramsOrCb : cb;
        callback(mockAPIObj);
      },
      getAuthResponse: (): any => { return { accessToken: 'mockAccessToken' } },
      logout: () => {},
      AppEvents: {},
      Canvas: {},
      Event: {} as any,
      getLoginStatus: () => null,
      ui: () => {},
      XFBML: {}
    };
    it('Should properly initialize', () => {
      const provider = new FacebookProvider(MOCK_EXTERNAL_AUTH_CONFIG, MOCK_ROUTER);
      expect(provider).toBeDefined();
    });

    it('Should properly call config', () => {
      const provider = new FacebookProvider(MOCK_EXTERNAL_AUTH_CONFIG, MOCK_ROUTER);
      vi.spyOn(FB, 'init');
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
      vi.spyOn(provider, 'config');
      vi.spyOn(FB, 'login');
      vi.spyOn(console, 'log');
      vi.spyOn(FB, 'api');
      mockResponse = false;
      provider.login();
      expect(provider.config).toHaveBeenCalledTimes(1);
      expect(FB.login).toHaveBeenCalledTimes(1);
      expect(FB.api).not.toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('User cancelled login or did not fully authorize.');
      vi.spyOn(FB, 'getAuthResponse').mockReturnValue({ accessToken: 'Fake' } as any);
      vi.spyOn(MOCK_ROUTER, 'navigate');
      mockResponse = true;
      const mockObj = {
        id: 'test id',
        name: 'test name',
        first_name: 'test first name',
        last_name: 'test family name',
        email: 'test email',
        picture: 'test picture'
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
      provider.login();
      vi.spyOn(Promise, 'resolve').mockReturnValue('Mock' as any);
      expect(provider.getUserInfo()).toEqual('Mock' as any);
    });

    it(`Should properly call 'logout'`, () => {
      const provider = new FacebookProvider(MOCK_EXTERNAL_AUTH_CONFIG, MOCK_ROUTER);
      vi.spyOn(FB, 'logout');
      provider.logout();
      expect(FB.logout).toHaveBeenCalled();
    });
  });

  describe('Google Provider', () => {

    it('Should properly initialize', () => {
      const provider = new GoogleProvider(MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG.configId);
      expect(provider).toBeDefined();
    });

    it('Should properly call login', () => {
      const provider = new GoogleProvider(MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG.configId);
      vi.spyOn(MOCK_OIDC_SECURITY, 'authorize');
      provider.login();
      expect(MOCK_OIDC_SECURITY.authorize).toHaveBeenCalledWith(MOCK_EXTERNAL_AUTH_CONFIG.configId);
    });

    it(`Should properly call 'formatUserData'`, async () => {
      const provider = new GoogleProvider(MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG.configId);
      const mockObj = {
        sub: 'test-id',
        name: 'test-name',
        email: 'test-email',
        given_name: 'test-given_name',
        family_name: 'test-family_name',
        picture: 'test-picture'
      };
      MOCK_OIDC_SECURITY.getAccessToken = vi.fn(() => of('FAKE'));
      const result = await (provider as any).formatUserData(mockObj);
      expect(result).toEqual({
        id: mockObj.sub,
        name: mockObj.name,
        email: mockObj.email,
        given_name: mockObj.given_name,
        family_name: mockObj.family_name,
        picture: mockObj.picture,
        externalToken: 'FAKE'
      });
    });

    it('Should properly call getUserInfo', async () => {
      const provider = new GoogleProvider(MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG.configId);
      const mockUserData = { sub: 'test-id', name: 'test-name', email: 'test@example.com' };
      MOCK_OIDC_SECURITY.userData$ = of({
        allUserData: [{ configId: MOCK_EXTERNAL_AUTH_CONFIG.configId, userData: mockUserData }]
      });
      MOCK_OIDC_SECURITY.getAccessToken = vi.fn(() => of('test-token'));
      const formatDataSpy = vi.spyOn<any, any>(provider, 'formatUserData');
      await provider.getUserInfo();
      expect(formatDataSpy).toHaveBeenCalledWith(mockUserData);
    });

    it('Should properly call logout', () => {
      const provider = new GoogleProvider(MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG.configId);
      vi.spyOn(MOCK_OIDC_SECURITY, 'logoff');
      provider.logout();
      expect(MOCK_OIDC_SECURITY.logoff).toHaveBeenCalledWith(MOCK_EXTERNAL_AUTH_CONFIG.configId);
    });
  });

  describe('Microsoft Provider', () => {

    it('Should properly initialize', () => {
      const provider = new MicrosoftProvider(MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG.configId);
      expect(provider).toBeDefined();
    });

    it('Should properly call login', () => {
      const provider = new MicrosoftProvider(MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG.configId);
      vi.spyOn(MOCK_OIDC_SECURITY, 'authorize');
      provider.login();
      expect(MOCK_OIDC_SECURITY.authorize).toHaveBeenCalledWith(MOCK_EXTERNAL_AUTH_CONFIG.configId);
    });

    it('Should properly call getUserInfo', async () => {
      const provider = new MicrosoftProvider(MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG.configId);
      const mockUserData = { oid: 'test-id', name: 'test-name', email: 'test@example.com' };
      MOCK_OIDC_SECURITY.userData$ = of({
        allUserData: [{ configId: MOCK_EXTERNAL_AUTH_CONFIG.configId, userData: mockUserData }]
      });
      MOCK_OIDC_SECURITY.getAccessToken = vi.fn(() => of('test-token'));
      const formatDataSpy = vi.spyOn<any, any>(provider, 'formatUserData');
      await provider.getUserInfo();
      expect(formatDataSpy).toHaveBeenCalledWith(mockUserData);
    });

    it(`Should properly call 'formatUserData'`, async () => {
      const provider = new MicrosoftProvider(MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG.configId);
      const mockObj = {
        oid: 'test-id',
        name: 'test-name',
        email: 'test-email',
      };
      MOCK_OIDC_SECURITY.getAccessToken = vi.fn(() => of('FAKE'));
      const result = await (provider as any).formatUserData(mockObj);
      expect(result).toEqual({
        id: mockObj.oid,
        name: mockObj.name,
        email: mockObj.email,
        externalToken: 'FAKE'
      });
    });
  });
});

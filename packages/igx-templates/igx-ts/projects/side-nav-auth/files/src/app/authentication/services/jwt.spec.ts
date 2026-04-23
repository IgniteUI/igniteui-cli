import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { decodeBase64Url, decodeJWT, parseUser } from './jwt-util';
import { JwtInterceptor } from './jwt.interceptor';
import { TestBed } from '@angular/core/testing';
import { UserStore } from './user-store';

describe('JWT Tests', () => {
  let interceptor: JwtInterceptor;
  let mockUserStore: any;

  beforeEach(() => {
    mockUserStore = {
      currentUser: null
    };

    TestBed.configureTestingModule({
      providers: [
        JwtInterceptor,
        { provide: UserStore, useValue: mockUserStore }
      ]
    });

    interceptor = TestBed.inject(JwtInterceptor);
  });

  afterEach(() => { vi.restoreAllMocks(); });

  describe(`JWT Interceptor`, () => {
    const mockService = {} as any;

    it(`Should properly initialize`, () => {
      expect(interceptor).toBeTruthy();
    });

    it(`Should properly handle 'intercept'`, () => {
      const mockRequest = {
        clone: vi.fn().mockReturnValue({})
      } as any;
      const mockNext = {
        handle: vi.fn(() => new Observable(sub => sub.complete()))
      } as any;

      mockUserStore.currentUser = false;
      // call w/o current user
      interceptor.intercept(mockRequest, mockNext).pipe(take(1)).subscribe();
      expect(mockNext.handle).toHaveBeenCalledTimes(1);
      expect(mockNext.handle).toHaveBeenCalledWith(mockRequest);
      mockUserStore.currentUser = {
        token: ''
      };
      interceptor.intercept(mockRequest, mockNext).pipe(take(1)).subscribe();
      expect(mockNext.handle).toHaveBeenCalledTimes(2);
      expect(mockNext.handle).toHaveBeenCalledWith(mockRequest);
      mockUserStore.currentUser = {
        token: 'test_token'
      };

      interceptor.intercept(mockRequest, mockNext).pipe(take(1)).subscribe();
      expect(mockRequest.clone).toHaveBeenCalledWith({
        setHeaders: {
          Authorization: `Bearer test_token`
        }
      });
    });
  });

  describe(`JWT Util`, () => {
    it(`Should properly handle 'decodeBase64Url'`, () => {
      expect(() => { decodeBase64Url('1'); }).toThrowError('Invalid base64 input');
      expect(decodeBase64Url('')).toEqual('');
      expect(decodeBase64Url(`98-1o1-0+31_`)).toEqual(atob(`98+1o1+0+31/`));
      expect(decodeBase64Url(`/----___+-+-+_`)).toEqual(atob(`/++++///+++++/`));
    });

    it(`Should properly handle 'decodeJWT'`, () => {
      expect(decodeJWT('')).toBeNull();
      expect(decodeJWT('893sdh9a8df')).toBeNull();
      let result = decodeJWT('132.321');
      expect(result?.header).toEqual(decodeBase64Url('132'));
      expect(result?.payload).toEqual(decodeBase64Url('321'));
      expect(result?.signature).toBeUndefined();
      result = decodeJWT('aSD.d112.13213');
      expect(result?.header).toEqual(decodeBase64Url('aSD'));
      expect(result?.payload).toEqual(decodeBase64Url('d112'));
      expect(result?.signature).toEqual('13213');
    });

    it(`Should properly handle 'parseUser'`, () => {
      expect(() => parseUser('not valid user name')).toThrow();
      vi.spyOn(JSON, 'parse').mockReturnValue({ payload: 'Mock payload' });
      expect(parseUser('123.123')).toEqual({ payload: 'Mock payload', token: '123.123' } as any);
    });
  });
});

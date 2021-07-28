import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { decodeBase64Url, decodeJWT, parseUser } from './jwt-util';
import { JwtInterceptor } from './jwt.interceptor';

describe('JWT Tests', () => {
  describe(`JWT Interceptor`, () => {
    const mockService = {} as any;
    const jwtInterceptor = new JwtInterceptor(mockService);

    it(`Should properly initialize`, () => {
      expect(jwtInterceptor).toBeTruthy();
    });

    it(`Should properly handle 'intercept'`, () => {
      const mockRequest = {
        clone: () => { }
      } as any;
      const mockNext = {
        handle: () => new Observable()
      } as any;
      spyOn(mockNext, 'handle').and.callThrough();
      mockService.currentUser = false;
      // call w/o current user
      jwtInterceptor.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
      expect(mockNext.handle).toHaveBeenCalledTimes(1);
      expect(mockNext.handle).toHaveBeenCalledWith(mockRequest);
      mockService.currentUser = {
        token: ''
      };
      jwtInterceptor.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
      expect(mockNext.handle).toHaveBeenCalledTimes(2);
      expect(mockNext.handle).toHaveBeenCalledWith(mockRequest);
      mockService.currentUser = {
        token: 'test_token'
      };
      spyOn(mockRequest, 'clone').and.callThrough();
      jwtInterceptor.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
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
      spyOn(JSON, 'parse').and.returnValue({ payload: 'Mock payload' });
      expect(parseUser('123.123')).toEqual({ payload: 'Mock payload', token: '123.123' } as any);
    });
  });
});

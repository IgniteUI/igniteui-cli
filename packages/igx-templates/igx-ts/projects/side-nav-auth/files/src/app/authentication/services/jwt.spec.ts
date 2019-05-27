import { JwtInterceptor } from './jwt.interceptor';
import { decodeBase64Url, parseUser, decodeJWT } from './jwt-util';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

describe('JWT Tests', () => {
    describe(`JWT Interceptor`, () => {
        const mockService = <any>{};
        const jwtInterceptor = new JwtInterceptor(mockService);

        it(`Should properly initialize`, () => {
            expect(jwtInterceptor).toBeTruthy();
        });

        it(`Should properly handle 'intercept'`, () => {
            const mockRequest = <any>{
                clone: () => { }
            };
            const mockNext = <any>{
                handle: () => new Observable()
            };
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
            expect(function () { decodeBase64Url('1'); }).toThrowError('Invalid base64 input');
            expect(decodeBase64Url('')).toEqual('');
            expect(decodeBase64Url(`98-1o1-0+31_`)).toEqual(atob(`98+1o1+0+31/`));
            expect(decodeBase64Url(`/----___+-+-+_`)).toEqual(atob(`/++++///+++++/`));
        });

        it(`Should properly handle 'decodeJWT'`, () => {
            expect(decodeJWT('')).toEqual(null);
            expect(decodeJWT('893sdh9a8df')).toEqual(null);
            expect(decodeJWT('132.321')).toEqual({
                header: decodeBase64Url(`132`),
                payload: decodeBase64Url(`321`),
                signature: undefined
            });
            expect(decodeJWT('aSD.d112.13213')).toEqual({
                header: decodeBase64Url(`aSD`),
                payload: decodeBase64Url(`d112`),
                signature: `13213`
            });
        });

        it(`Should properly handle 'parseUser'`, () => {
            spyOn(console, 'error');
            expect(parseUser('asdad')).toEqual(null);
            expect(console.error).toHaveBeenCalledWith(`The JWT token provided was not valid:\nasdad`);
            spyOn(JSON, 'parse').and.returnValue({ payload: 'Mock payload'});
            expect(parseUser('123.123')).toEqual(<any>{ payload: 'Mock payload', token: '123.123'});
        });
    });
});

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () =>  {
    let mockRouter, mockUserService: any;
    beforeEach(() => {
        mockRouter = {
            navigate: () => {}
        };
        mockUserService = {
            currentUser: true
        };
    });

    it('Should properly initialize', () => {
        const authGuard = new AuthGuard(mockRouter, mockUserService);
        expect(authGuard).toBeDefined();
    });

    it(`Should properly call 'canActivate'`, () => {
        const authGuard = new AuthGuard(mockRouter, mockUserService);
        const mockSpy = jasmine.createSpy('mockSpy');
        expect(authGuard.canActivate(<any>mockSpy, <any>mockSpy)).toEqual(true);
    });
    it(`Should properly call 'canActivate'`, () => {
        const authGuard = new AuthGuard(mockRouter, mockUserService);
        const mockSpy = jasmine.createSpy('mockSpy');
        mockUserService.currentUser = false;
        spyOn(mockRouter, 'navigate');
        expect(authGuard.canActivate(<any>mockSpy, <any>{ url: 'test'})).toEqual(false);
        expect(mockRouter.navigate).toHaveBeenCalled();
        expect(mockRouter.navigate).toHaveBeenCalledWith([''], { queryParams: { returnUrl: 'test' } });
    });
});


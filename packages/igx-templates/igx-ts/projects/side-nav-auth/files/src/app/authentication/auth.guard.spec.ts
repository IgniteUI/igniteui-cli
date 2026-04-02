import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let mockRouter: any;
  let mockUserService: any;

  afterEach(() => { vi.restoreAllMocks(); });

  beforeEach(() => {
    mockRouter = {
      navigate: () => { }
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
    const mockSpy = vi.fn();
    expect(authGuard.canActivate(mockSpy as any, mockSpy as any)).toEqual(true);
  });
  it(`Should properly call 'canActivate'`, () => {
    const authGuard = new AuthGuard(mockRouter, mockUserService);
    const mockSpy = vi.fn();
    mockUserService.currentUser = false;
    vi.spyOn(mockRouter, 'navigate');
    expect(authGuard.canActivate(mockSpy as any, { url: 'test' } as any)).toEqual(false);
    expect(mockRouter.navigate).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith([''], { queryParams: { returnUrl: 'test' } });
  });
});

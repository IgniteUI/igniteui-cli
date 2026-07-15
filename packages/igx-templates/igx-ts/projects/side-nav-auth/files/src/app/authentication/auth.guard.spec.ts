import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserStore } from './services/user-store';

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

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: mockRouter },
        { provide: UserStore, useValue: mockUserService }
      ]
    });
  });

  it('Should properly initialize', () => {
    const authGuard = TestBed.inject(AuthGuard);
    expect(authGuard).toBeDefined();
  });

  it(`Should return true from 'canActivate' for authenticated user`, () => {
    const authGuard = TestBed.inject(AuthGuard);
    const mockSpy = vi.fn();
    expect(authGuard.canActivate(mockSpy as any, mockSpy as any)).toEqual(true);
  });
  it(`Should redirect and return false from 'canActivate' for unauthenticated user`, () => {
    const authGuard = TestBed.inject(AuthGuard);
    const mockSpy = vi.fn();
    mockUserService.currentUser = false;
    vi.spyOn(mockRouter, 'navigate');
    expect(authGuard.canActivate(mockSpy as any, { url: 'test' } as any)).toEqual(false);
    expect(mockRouter.navigate).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith([''], { queryParams: { returnUrl: 'test' } });
  });
});

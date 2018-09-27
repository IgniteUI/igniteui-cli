import { AuthenticationModule } from './authentication.module';

describe('AuthenticationModule', () => {
  let authenticationModule: AuthenticationModule;

  beforeEach(() => {
    authenticationModule = new AuthenticationModule();
  });

  it('should create an instance', () => {
    expect(authenticationModule).toBeTruthy();
  });
});

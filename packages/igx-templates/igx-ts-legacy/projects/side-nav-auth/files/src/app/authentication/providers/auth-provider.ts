import { ExternalLogin } from '../models/login';

export interface AuthProvider {
  config(): void;
  login(): void;
  getUserInfo(): Promise<ExternalLogin>;
  logout(): void;
}

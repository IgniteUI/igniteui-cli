import { ExternalLogin } from '../models/login';

export interface AuthProvider {
  login(): void;
  getUserInfo(): Promise<ExternalLogin>;
  logout(): void;
}

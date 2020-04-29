import { ExternalLogin } from '../models/login';

export interface AuthProvider {
  config();
  login();
  getUserInfo(): Promise<ExternalLogin>;
  logout();
}

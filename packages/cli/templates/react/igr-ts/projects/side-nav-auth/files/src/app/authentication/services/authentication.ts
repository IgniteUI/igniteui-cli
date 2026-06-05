import type { Login } from '../models/login';
import type { RegisterInfo } from '../models/register-info';
import type { ExternalLogin } from '../models/external-login';
import type { LoginResult } from '../models/user';
import { parseUser } from './jwtUtil';
import { fakeLogin, fakeRegister, fakeExtLogin } from './fakeBackend';

/** Authentication service — swap fakeLogin/fakeRegister for real API calls when ready. */
export const Authentication = {
  async login(data: Login): Promise<LoginResult> {
    try {
      const token = await fakeLogin(data);
      return { user: parseUser(token) };
    } catch (e: any) {
      return { error: e.message };
    }
  },

  async register(data: RegisterInfo): Promise<LoginResult> {
    try {
      const token = await fakeRegister(data);
      return { user: parseUser(token) };
    } catch (e: any) {
      return { error: e.message };
    }
  },

  /** Send user info from a social provider to the external login endpoint. */
  async loginWith(data: ExternalLogin): Promise<LoginResult> {
    try {
      const token = fakeExtLogin(data);
      return { user: parseUser(token) };
    } catch (e: any) {
      return { error: e.message };
    }
  }
};

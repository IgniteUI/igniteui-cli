import type { Login } from '../models/login';
import type { RegisterInfo } from '../models/register-info';
import type { LoginResult } from '../models/user';
import { parseUser } from './jwtUtil';
import { fakeLogin, fakeRegister } from './fakeBackend';

/** Authentication service — swap fakeLogin/fakeRegister for real API calls when ready. */
export const Authentication = {
  async login(data: Login): Promise<LoginResult> {
    try {
      const token = fakeLogin(data);
      return { user: parseUser(token) };
    } catch (e: any) {
      return { error: e.message };
    }
  },

  async register(data: RegisterInfo): Promise<LoginResult> {
    try {
      const token = fakeRegister(data);
      return { user: parseUser(token) };
    } catch (e: any) {
      return { error: e.message };
    }
  }
};

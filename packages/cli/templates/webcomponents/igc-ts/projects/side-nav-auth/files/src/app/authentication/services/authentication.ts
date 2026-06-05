import type { Login } from '../models/login.js';
import type { RegisterInfo } from '../models/register-info.js';
import type { LoginResult } from '../models/user.js';
import { parseUser } from './jwtUtil.js';
import { fakeLogin, fakeRegister } from './fakeBackend.js';

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
  }
};

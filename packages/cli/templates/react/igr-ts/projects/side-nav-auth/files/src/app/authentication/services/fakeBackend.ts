// ⚠ DEVELOPMENT ONLY — simulates POST /login, /register using localStorage.
// Before going to production: remove this interceptor and replace with calls to your real API.
import type { Login } from '../models/login';
import type { RegisterInfo } from '../models/register-info';

const USERS_KEY = '_fake_users';

interface StoredUser {
  given_name: string;
  family_name: string;
  email: string;
  password: string;
}

function getUsers(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function makeJwt(payload: object): string {
  const header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
  const body = btoa(JSON.stringify({ exp: Date.now() / 1000 + 3600, ...payload }));
  return `${header}.${body}.`;
}

export function fakeLogin(data: Login): string {
  const users = getUsers();
  const user = users.find(u => u.email === data.email && u.password === data.password);
  if (!user) {
    throw new Error('Invalid email or password.');
  }
  return makeJwt({ name: `${user.given_name} ${user.family_name}`, given_name: user.given_name, family_name: user.family_name, email: user.email });
}

export function fakeRegister(data: RegisterInfo): string {
  const users = getUsers();
  if (users.find(u => u.email === data.email)) {
    throw new Error('An account with this email already exists.');
  }
  const newUser: StoredUser = { given_name: data.given_name, family_name: data.family_name, email: data.email, password: data.password };
  saveUsers([...users, newUser]);
  return makeJwt({ name: `${data.given_name} ${data.family_name}`, given_name: data.given_name, family_name: data.family_name, email: data.email });
}

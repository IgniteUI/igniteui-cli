// ⚠ DEVELOPMENT ONLY — simulates POST /login, /register, /extlogin using localStorage.
// Before going to production: remove this interceptor and replace with calls to your real API.
import type { Login } from '../models/login.js';
import type { RegisterInfo } from '../models/register-info.js';
import type { ExternalLogin } from '../models/external-login.js';

const USERS_KEY = '_fake_users';

interface StoredUser {
  given_name: string;
  family_name: string;
  email: string;
  passwordHash: string;
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

async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
}

function makeJwt(payload: object): string {
  const header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
  const body = btoa(JSON.stringify({ exp: Date.now() / 1000 + 3600, ...payload }));
  return `${header}.${body}.`;
}

export async function fakeLogin(data: Login): Promise<string> {
  const users = getUsers();
  const passwordHash = await hashPassword(data.password);
  const user = users.find(u => u.email === data.email && u.passwordHash === passwordHash);
  if (!user) {
    throw new Error('Invalid email or password.');
  }
  return makeJwt({ name: `${user.given_name} ${user.family_name}`, given_name: user.given_name, family_name: user.family_name, email: user.email });
}

export async function fakeRegister(data: RegisterInfo): Promise<string> {
  const users = getUsers();
  if (users.find(u => u.email === data.email)) {
    throw new Error('An account with this email already exists.');
  }
  const newUser: StoredUser = {
    given_name: data.given_name,
    family_name: data.family_name,
    email: data.email,
    passwordHash: await hashPassword(data.password)
  };
  saveUsers([...users, newUser]);
  return makeJwt({ name: `${data.given_name} ${data.family_name}`, given_name: data.given_name, family_name: data.family_name, email: data.email });
}
/** Upsert a user from a social (external) auth provider and return a JWT. */
export function fakeExtLogin(data: ExternalLogin): string {
  const users = getUsers();
  const existing = users.find(u => u.email === data.email && data.email != null)
    ?? users.find(u => u.externalId === data.id);
  const given_name = data.given_name ?? data.name?.split(' ')[0] ?? '';
  const family_name = data.family_name ?? data.name?.split(' ').slice(1).join(' ') ?? '';
  if (existing) {
    // Update profile fields from provider (name/picture may change)
    existing.given_name = given_name;
    existing.family_name = family_name;
    saveUsers(users);
  } else {
    if (!data.email) {
      throw new Error('Cannot create an account without an email address.');
    }
    saveUsers([...users, { given_name, family_name, email: data.email, passwordHash: '' }]);
  }
  return makeJwt({ name: data.name, given_name, family_name, email: data.email, picture: data.picture });
}

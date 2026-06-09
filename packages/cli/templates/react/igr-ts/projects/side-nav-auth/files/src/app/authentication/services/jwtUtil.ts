import type { UserJWT } from '../models/user';

/** Parse the payload of a JWT string into a UserJWT object. */
export function parseUser(token: string): UserJWT & { token: string } {
  const base64url = token.split('.')[1];
  const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');
  const decoded = JSON.parse(atob(padded));
  return { ...decoded, token };
}

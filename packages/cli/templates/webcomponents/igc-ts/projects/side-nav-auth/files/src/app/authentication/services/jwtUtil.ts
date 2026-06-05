import type { UserJWT } from '../models/user.js';

/** Parse the payload of a JWT string into a UserJWT object. */
export function parseUser(token: string): UserJWT & { token: string } {
  const payload = token.split('.')[1];
  const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
  return { ...decoded, token };
}

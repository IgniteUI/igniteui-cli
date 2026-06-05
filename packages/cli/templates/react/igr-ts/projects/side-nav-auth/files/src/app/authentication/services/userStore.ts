import type { User } from '../models/user';

const USER_KEY = 'currentUser';

/**
 * Simple localStorage-backed user store.
 *
 * NOTE: Storing the full user object in localStorage can be susceptible to XSS attacks.
 * Consider additional security measures before going to production.
 */
export const UserStore = {
  getUser(): User | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  setUser(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  clearUser(): void {
    localStorage.removeItem(USER_KEY);
  },

  getInitials(user: User): string {
    return (user.given_name.charAt(0) + (user.family_name?.charAt(0) ?? '')).toUpperCase();
  }
};

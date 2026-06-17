import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { User } from './models/user';
import type { Login } from './models/login';
import type { RegisterInfo } from './models/register-info';
import type { ExternalLogin } from './models/external-login';
import { Authentication } from './services/authentication';
import { UserStore } from './services/userStore';
import { ExternalAuth } from './services/externalAuth';

interface AuthContextType {
  currentUser: User | null;
  initials: string | null;
  login: (data: Login) => Promise<string | null>;
  register: (data: RegisterInfo) => Promise<string | null>;
  loginWith: (data: ExternalLogin) => Promise<string | null>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(() => UserStore.getUser());

  const initials = currentUser ? UserStore.getInitials(currentUser) : null;

  const login = useCallback(async (data: Login): Promise<string | null> => {
    const result = await Authentication.login(data);
    if (result.user) {
      UserStore.setUser(result.user);
      setCurrentUser(result.user);
      return null;
    }
    return result.error ?? 'Login failed';
  }, []);

  const register = useCallback(async (data: RegisterInfo): Promise<string | null> => {
    const result = await Authentication.register(data);
    if (result.user) {
      UserStore.setUser(result.user);
      setCurrentUser(result.user);
      return null;
    }
    return result.error ?? 'Registration failed';
  }, []);

  const loginWith = useCallback(async (data: ExternalLogin): Promise<string | null> => {
    const result = await Authentication.loginWith(data);
    if (result.user) {
      UserStore.setUser(result.user);
      setCurrentUser(result.user);
      return null;
    }
    return result.error ?? 'Social login failed';
  }, []);

  const logout = useCallback(() => {
    ExternalAuth.logout();
    UserStore.clearUser();
    setCurrentUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, initials, login, register, loginWith, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

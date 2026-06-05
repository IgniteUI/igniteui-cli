import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { User } from './models/user';
import type { Login } from './models/login';
import type { RegisterInfo } from './models/register-info';
import { Authentication } from './services/authentication';
import { UserStore } from './services/userStore';

interface AuthContextType {
  currentUser: User | null;
  initials: string | null;
  login: (data: Login) => Promise<string | null>;
  register: (data: RegisterInfo) => Promise<string | null>;
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

  const logout = useCallback(() => {
    UserStore.clearUser();
    setCurrentUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, initials, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

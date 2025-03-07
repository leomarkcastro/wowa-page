import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

export interface User {
  id: string;
  name: string;
  middleName: string | null;
  lastName: string;
  displayName: string;
  email: string;
  role: string;
  createdAt: string;
  lastLogin: string | null;
}

export interface UpdateUser {
  id: string;
  name: string;
  middleName: string;
  lastName: string;
  email: string;
}

export interface RegisterUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  loginType?: string;
}

export interface AuthBehavior {
  loginFn: (
    credentials: LoginCredentials,
    rememberMe?: boolean,
  ) => Promise<User>;
  loginWithRefreshTokenFn: () => Promise<User | null>;
  forceRefreshTokenLoginFn: () => Promise<User | null>;
  logoutFn: () => Promise<void>;
  getMeFn: () => Promise<User>;
  registerFn: (data: RegisterUser) => Promise<User>;
  requestPasswordResetFn: (email: string) => Promise<void>;
  resetPasswordFn: (token: string, newPassword: string) => Promise<void>;
  changePasswordFn: (oldPassword: string, newPassword: string) => Promise<void>;
  updateMeFn: (data: UpdateUser) => Promise<void>;
}

interface AuthContextType {
  user: Partial<User> | null;
  loading: boolean;
  login: (credentials: LoginCredentials, rememberMe?: boolean) => Promise<User>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<boolean>;
  me: () => Promise<User>;
  updateMe: (data: UpdateUser) => Promise<void>;
  isLoggedIn: boolean;
  register: (data: RegisterUser) => Promise<User>;
  requestPasswordReset: (email: string) => Promise<boolean>;
  resetPassword: (token: string, newPassword: string) => Promise<boolean>;
  changePassword: (
    oldPassword: string,
    newPassword: string,
  ) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
  behavior,
}: {
  children: React.ReactNode;
  behavior: AuthBehavior;
}) {
  const [user, setUser] = useState<Partial<User> | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  // Add useEffect to load user on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        // First try to get the user with the current session token
        let userData = await behavior.getMeFn();

        // If that fails, try to login with refresh token
        if (!userData) {
          userData = await behavior.loginWithRefreshTokenFn();
        }

        setUser(userData);
      } catch (error) {
        console.error('Failed to load user:', error);
        // Try to login with refresh token if regular auth fails
        try {
          const userData = await behavior.loginWithRefreshTokenFn();
          setUser(userData);
        } catch (refreshError) {
          console.error(
            'Failed to auto-login with refresh token:',
            refreshError,
          );
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [behavior]);

  const login = useCallback(
    async (credentials: LoginCredentials, rememberMe = false) => {
      try {
        const userData = await behavior.loginFn(credentials, rememberMe);
        setUser(userData);
        return userData;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    [behavior],
  );

  const logout = useCallback(async () => {
    try {
      await behavior.logoutFn();
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  }, [behavior]);

  const refreshSession = useCallback(async () => {
    try {
      const userData = await behavior.forceRefreshTokenLoginFn();
      if (userData) {
        setUser(userData);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Force refresh token login failed:', error);
      return false;
    }
  }, [behavior]);

  const me = useCallback(async () => {
    try {
      return await behavior.getMeFn();
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw error;
    }
  }, [behavior]);

  const updateMe = useCallback(
    async (data: UpdateUser) => {
      try {
        await behavior.updateMeFn(data);
      } catch (error) {
        console.error('Failed to update user:', error);
        throw error;
      }
    },
    [me],
  );

  const register = useCallback(
    async (data: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    }) => {
      try {
        const userData = await behavior.registerFn(data);
        setUser(userData);
        return userData;
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },
    [behavior],
  );

  const requestPasswordReset = useCallback(
    async (email: string) => {
      try {
        await behavior.requestPasswordResetFn(email);
        return true;
      } catch (error) {
        console.error('Password reset request failed:', error);
        return false;
      }
    },
    [behavior],
  );

  const resetPassword = useCallback(
    async (token: string, newPassword: string) => {
      try {
        await behavior.resetPasswordFn(token, newPassword);
        return true;
      } catch (error) {
        console.error('Password reset failed:', error);
        return false;
      }
    },
    [behavior],
  );

  const changePassword = useCallback(
    async (oldPassword: string, newPassword: string) => {
      try {
        await behavior.changePasswordFn(oldPassword, newPassword);
        return true;
      } catch (error) {
        console.error('Password change failed:', error);
        return false;
      }
    },
    [behavior],
  );

  const value = {
    user,
    loading,
    login,
    logout,
    refreshSession,
    me,
    updateMe,
    isLoggedIn: !!user,
    register,
    requestPasswordReset,
    resetPassword,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

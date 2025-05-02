import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    accounts?: string[];
  } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signOutUser: () => Promise<void>;
  isSuperAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState({
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    role: 'ADMIN',
    accounts: ['1', '2']
  });

  const login = async (email: string, password: string) => {
    // Mock login
    setUser({
      id: '1',
      email,
      name: 'Demo User',
      role: 'ADMIN',
      accounts: ['1', '2']
    });
  };

  const logout = () => {
    setUser(null);
  };

  const signOutUser = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      user,
      login,
      logout,
      signOutUser,
      isSuperAdmin: user?.role === 'ADMIN'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}; 
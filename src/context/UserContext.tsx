import { createContext, useContext, useState, type ReactNode } from "react";

export interface MinimalUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface AuthContextType {
  user: MinimalUser | null;
  setUser: (user: MinimalUser | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => { },
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<MinimalUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

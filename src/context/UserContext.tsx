import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../FireBaseConfig";
import { createUserDocumentIfNotExists } from "../service/userService";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        createUserDocumentIfNotExists(firebaseUser).catch((err) =>
          console.error("Erro criando doc do usuário:", err)
        );
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("");
  return context;
};

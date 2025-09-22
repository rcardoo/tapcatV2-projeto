import { createContext, useContext, useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { db } from "../FireBaseConfig";
import { useAuth } from "./UserContext";

type Status = {
  clicks: number;
  chaves: number;
};

type UserData = {
  email?: string | null;
  inventario: any[];
  cartas: any[];
  status: Status;
  conquistas: any[];
};

interface UserDataContextType {
  userData: UserData | null;
  incrementClicks: (by?: number) => Promise<void>;
  addChave: (by?: number) => Promise<void>;
  addCarta: (carta: any) => Promise<void>;
  addItemInventario: (item: any) => Promise<void>;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (!user) {
      setUserData(null);
      return;
    }

    const ref = doc(db, "users", user.uid);
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setUserData({
          email: data.email,
          inventario: data.inventario || [],
          cartas: data.cartas || [],
          status: data.status || { clicks: 0, chaves: 0 },
          conquistas: data.conquistas || [],
        });
      } else {
        setUserData(null);
      }
    });

    return () => unsub();
  }, [user]);

  const incrementClicks = async (by = 1) => {
    if (!user || by <= 0) return;
    const ref = doc(db, "users", user.uid);
    await updateDoc(ref, { "status.clicks": increment(by) });
  };

  const addChave = async (by = 1) => {
    if (!user || by <= 0) return;
    const ref = doc(db, "users", user.uid);
    await updateDoc(ref, { "status.chaves": increment(by) });
  };

  const addCarta = async (carta: any) => {
    if (!user || !carta) return;
    const ref = doc(db, "users", user.uid);
    await updateDoc(ref, { cartas: arrayUnion(carta) });
  };

  const addItemInventario = async (item: any) => {
    if (!user || !item) return;
    const ref = doc(db, "users", user.uid);
    await updateDoc(ref, { inventario: arrayUnion(item) });
  };

  return (
    <UserDataContext.Provider
      value={{ userData, incrementClicks, addChave, addCarta, addItemInventario }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const ctx = useContext(UserDataContext);
  if (!ctx) throw new Error("useUserData deve ser usado dentro de UserDataProvider");
  return ctx;
};

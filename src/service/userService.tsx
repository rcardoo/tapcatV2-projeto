import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import type { User } from "firebase/auth";
import { db } from "../FireBaseConfig";

export async function createUserDocumentIfNotExists(user: User | null) {
  if (!user) return;
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (snap.exists()) {
    return;
  }

  const initialData = {
    email: user.email ?? null,
    inventario: [],
    cartas: [],
    status: {
      clicks: 0,
      chaves: 0
    },
    conquistas: [],
    createdAt: serverTimestamp()
  };

  await setDoc(userRef, initialData, { merge: true });
}

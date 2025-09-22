import cat from "../../assets/cat.webp";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../FireBaseConfig";
import { useAuth } from "../../context/UserContext";

const Game = () => {
  const { user } = useAuth();

  const handleStatus = async () => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      "status.clicks": increment(1),
    });

    const chance = Math.floor(Math.random() * 1000) + 1;
    if (chance === 777) {
      alert("Opa, você encontrou uma chave!");
      await updateDoc(userRef, {
        "status.chaves": increment(1),
      });
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center relative">
      <button
        onClick={handleStatus}
        className="mt-10 focus:outline-none active:scale-95 transition"
      >
        <img
          src={cat}
          alt="Gato do TapCat"
          className="w-40 sm:w-56 md:w-64 lg:w-72 select-none pointer-events-none"
        />
      </button>
    </div>
  );
};

export default Game;

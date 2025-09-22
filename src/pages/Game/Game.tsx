import cat from "../../assets/cat.webp"
import { doc, updateDoc, increment } from "firebase/firestore"
import { db } from "../../FireBaseConfig"
import { useAuth } from "../../context/UserContext"
// import { useUserData } from "../../context/UserDataContext" 

const Game = () => {
  const { user } = useAuth()
  // const { userData } = useUserData()

  async function handleStatus() {
    if (!user) return
    const ref = doc(db, "users", user.uid)

    await updateDoc(ref, {
      "status.clicks": increment(1),
    })

    const rangeChaves = Math.floor(Math.random() * 10) + 1
    if (rangeChaves === 5) {
      alert("Opa, Você encontrou uma chave")
      await updateDoc(ref, {
        "status.chaves": increment(1),
      })
    }
  }

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center relative">

      <button
        className="mt-10 focus:outline-none active:scale-95 transition"
        onClick={handleStatus}
      >
        <img
          src={cat}
          alt="Gato do TapCat"
          className="w-40 sm:w-56 md:w-64 lg:w-72 select-none pointer-events-none"
        />
      </button>
    </div>
  )
}

export default Game

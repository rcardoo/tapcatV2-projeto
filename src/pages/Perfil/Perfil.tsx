import { auth } from "../../FireBaseConfig";
import { signOut } from "firebase/auth";

import icon from "../../assets/icon.svg";
import Medalhas from "../../components/Medalhas/Medalhas";

import { useAuth } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg w-full max-w-3xl transition hover:shadow-2xl mt-20">
        <img
          src={user?.photoURL || icon}
          alt="Avatar"
          className="w-32 h-32 rounded-full border-2 border-blue-500 object-cover shadow-md"
        />

        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-white text-2xl font-semibold">
            {user?.displayName || "Nome não disponível"}
          </p>
          <p className="text-slate-400 text-lg">
            {user?.email || "Email não disponível"}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={handleSignOut}
              className="bg-red-600 px-6 py-2 rounded-full text-white font-bold hover:bg-red-700 transition"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
        <div className="bg-slate-900 rounded-2xl p-6 mt-12 w-full max-w-3xl shadow-lg transition hover:shadow-2xl">
            <h2 className="text-white text-xl font-semibold mb-6">Medalhas</h2>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <Medalhas nomeMedalha="teste" imgMedalha={icon}/>
                <Medalhas nomeMedalha="teste" imgMedalha={icon}/>
                <Medalhas nomeMedalha="teste" imgMedalha={icon}/>
            </div>
        </div>

    </div>
  );
};

export default Perfil;

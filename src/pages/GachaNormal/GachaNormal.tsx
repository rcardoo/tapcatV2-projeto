import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { FaKey } from "react-icons/fa6";
import Efeito3dCard from "../../components/Efeito3dCard/Efeito3dCard";
import CardDescSummon from "../../components/CardDescSummon/CardDescSummon";
import { Raridade } from "../../components/Raridade/Raridade";
import { RaridadeBorda } from "../../components/RaridadeBorda/RaridadeBorda";

import { useAuth } from "../../context/UserContext";
import { useUserData } from "../../context/UserDataContext";
import { doc, updateDoc, increment, arrayUnion } from "firebase/firestore";
import { db } from "../../FireBaseConfig";

const GachaNormal = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  const { nome, img, price } = location.state;

  const { user } = useAuth();
  const { userData } = useUserData();

  const handleSummon = async () => {
    if (!user || !userData) return;

    if ((userData.status.chaves ?? 0) < price) {
      alert("Você não tem chaves suficientes para invocar!");
      return;
    }

    setLoading(true);
    try {
      const ref = doc(db, "users", user.uid);

      // Gasta chaves
      await updateDoc(ref, {
        "status.chaves": increment(-price),
      });

      // Busca personagem
      const rangeSummon = Math.floor(Math.random() * 25000) + 1;
      const response = await axios.get(`https://api.jikan.moe/v4/characters/${rangeSummon}/full`);
      const carta = response.data.data;
      setData(carta);

      // Cria objeto da carta com anime/manga corretos, vazio se não existir
      const novaCarta = {
        id: uuidv4(),
        nome: carta.name || "Nome Desconhecido",
        img: carta.images.jpg.image_url,
        nomeAnime: carta.anime?.[0]?.anime?.title || "",
        nomeManga: carta.manga?.[0]?.manga?.title || "",
        nomePack: nome || `Pack #${id}`,
        raridade: Raridade(carta.favorites),
        favorites: carta.favorites ?? 0,
      };

      // Salva no inventário do Firebase
      await updateDoc(ref, {
        inventario: arrayUnion(novaCarta),
      });

    } catch (e) {
      alert("Ops! Parece que roubei você. Miau!!");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-6 gap-8">
      <div className="flex flex-col gap-6 items-center justify-center mt-20">
        <h2 className="text-white font-bold text-2xl text-center">
          {nome || `Pack #${id}`}
        </h2>

        <p className="flex items-center gap-2 bg-amber-400/20 text-amber-50 font-semibold px-3 py-1 rounded-full shadow-sm">
          <FaKey className="text-yellow-400 w-5 h-5" />
          <span className="text-lg">{`Valor: ${price}`}</span>
        </p>

        <Efeito3dCard
          image={data ? data.images.jpg.image_url : img}
          alt={nome}
          borderClass={data ? RaridadeBorda(Raridade(data.favorites)) : ""}
        />

        {data && (
          <CardDescSummon
            name={data.name || "Nome Desconhecido"}
            nomeAnime={data.anime?.[0]?.anime?.title || ""}
            nomeManga={data.manga?.[0]?.manga?.title || ""}
            nomePack={nome || `Pack #${id}`}
            raridade={Raridade(data.favorites)}
            favorites={data.favorites ?? 0}
          />
        )}
      </div>

      <button
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-white"
        onClick={handleSummon}
        disabled={loading}
      >
        {loading ? "Invocando" : "Invocar"}
      </button>
    </div>
  );
};

export default GachaNormal;

import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { FaKey } from "react-icons/fa6";
import Efeito3dCard from "../../components/Efeito3dCard/Efeito3dCard";

import { useAuth } from "../../context/UserContext";
import { useUserData } from "../../context/UserDataContext";
import CardDescSummon from "../../components/CardDescSummon/CardDescSummon";
import { RaridadeBordaEspecial } from "../../components/RaridadeBordaEspecial/RaridadeBordaEspecial";
import { RaridadePorRole } from "../../components/RaridadePorRole/RaridadePorRole";
import { doc, updateDoc, increment, arrayUnion } from "firebase/firestore";
import { db } from "../../FireBaseConfig";
import { v4 as uuidv4 } from "uuid";

const GacnhaEspecial = () => {
  const [data, setData] = useState<any>();
  const [dataFoto, setDataFoto] = useState<any>();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  const { nome, img, price, nomeAnime } = location.state;

  const { user } = useAuth();
  const { userData } = useUserData();

  const handleSummon = async () => {
    if (!user || !userData) return;

    if ((userData.status.chaves ?? 0) < price) {
      alert("Você não tem chaves suficientes para invocar!");
      return;
    }

    try {
      setLoading(true);

      // Atualiza chaves no Firebase
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, {
        "status.chaves": increment(-price),
      });

      // Pega personagens do anime
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/characters`
      );

      const personagens = response.data.data;

      // Pega personagem aleatório
      const rangeSummon = Math.floor(Math.random() * personagens.length);
      const carta = personagens[rangeSummon];

      // Busca fotos do personagem
      const responseFotos = await axios.get(
        `https://api.jikan.moe/v4/characters/${carta.character.mal_id}/pictures`
      );
      const fotos = responseFotos.data.data;

      let fotoFinal: string;
      if (fotos && fotos.length > 0) {
        const randomIndex = Math.floor(Math.random() * fotos.length);
        fotoFinal = fotos[randomIndex].jpg.image_url;
      } else {
        fotoFinal = carta.character.images.jpg.image_url;
      }

      setData(carta);
      setDataFoto(fotoFinal);

      // Cria objeto da nova carta para salvar no inventário
      const novaCarta = {
        id: uuidv4(),
        nome: carta.character?.name || "Nome Desconhecido",
        img: fotoFinal,
        nomeAnime: nomeAnime || "Anime Desconhecido",
        nomePack: nome || `Pack Especial #${id}`,
        raridade: RaridadePorRole(carta.role),
        role: carta.role,
      };

      // Salva a carta no inventário do Firebase
      await updateDoc(ref, {
        inventario: arrayUnion(novaCarta),
      });

    } catch (e) {
      console.error(e);
      alert("Ops, você foi roubado!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-6 gap-8">
      <div className="flex flex-col gap-6 items-center justify-center mt-20">
        <h2 className="text-white font-bold text-2xl text-center">
          {`${nome}` || `Pack #${id}`}
        </h2>

        <p className="flex items-center gap-2 bg-amber-400/20 text-amber-50 font-semibold px-3 py-1 rounded-full shadow-sm">
          <FaKey className="text-yellow-400 w-5 h-5" />
          <span className="text-lg">{`Valor: ${price}`}</span>
        </p>

        <Efeito3dCard
          image={dataFoto ? dataFoto : img}
          alt={nome}
          borderClass={data ? RaridadeBordaEspecial(data.role) : ""}
        />

        {data && (
          <CardDescSummon
            name={data.character?.name || "Nome Desconhecido"}
            nomeAnime={nomeAnime}
            nomePack={nome || `Pack #${id}`}
            raridade={RaridadePorRole(data.role)}
          />
        )}
      </div>

      <button
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-white"
        onClick={handleSummon}
        disabled={loading}
      >
        {loading ? "Invocando..." : "Invocar"}
      </button>
    </div>
  );
};

export default GacnhaEspecial;

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

import { useAuth } from "../../context/UserContext";
import { db } from "../../FireBaseConfig";

import Efeito3dCard from "../../components/Efeito3dCard/Efeito3dCard";
import CardDescSummon from "../../components/CardDescSummon/CardDescSummon";
import { RaridadeBordaEspecial } from "../../components/RaridadeBordaEspecial/RaridadeBordaEspecial";

export const RaridadeBorda = (raridade: string): string => {
  switch (raridade) {
    case "Lendária":
      return "border-4 border-yellow-400 shadow-lg";
    case "Épica":
      return "border-4 border-purple-500 shadow-lg";
    case "Rara":
      return "border-4 border-blue-400 shadow-lg";
    case "Incomum":
      return "border-4 border-green-400 shadow-lg";
    default:
      return "border-4 border-slate-400 shadow-md";
  }
};

const Inventario = () => {
  const { user } = useAuth();

  const [inventario, setInventario] = useState<any[]>([]);
  const [filtroRaridade, setFiltroRaridade] = useState("");
  const [filtroPack, setFiltroPack] = useState("");

  useEffect(() => {
    const fetchInventario = async () => {
      if (!user) return;
      const ref = doc(db, "users", user.uid);
      const docSnap = await getDoc(ref);
      const data = docSnap.data();
      setInventario(data?.inventario || []);
    };
    fetchInventario();
  }, [user]);

  const packsUnicos = Array.from(
    new Set(inventario.map((carta) => carta.nomePack))
  );

  const inventarioFiltrado = inventario.filter((carta) => {
    const matchRaridade = filtroRaridade ? carta.raridade === filtroRaridade : true;
    const matchPack = filtroPack ? carta.nomePack === filtroPack : true;
    return matchRaridade && matchPack;
  });

  return (
    <div className="min-h-screen bg-slate-950 p-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-white mt-20">Inventário</h1>

      <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-w-xl">
        <select
          value={filtroRaridade}
          onChange={(e) => setFiltroRaridade(e.target.value)}
          className="px-3 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Todas as raridades</option>
          <option value="Comum">Comum</option>
          <option value="Incomum">Incomum</option>
          <option value="Rara">Rara</option>
          <option value="Épica">Épica</option>
          <option value="Lendária">Lendária</option>
        </select>

        <select
          value={filtroPack}
          onChange={(e) => setFiltroPack(e.target.value)}
          className="px-3 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Todos os packs</option>
          {packsUnicos.map((pack) => (
            <option key={pack} value={pack}>
              {pack}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap-reverse gap-10 items-center justify-center">
        {inventarioFiltrado.map((carta) => (
          <div key={carta.id} className="flex flex-col items-center justify-center gap-2 p-3">
            <Efeito3dCard
              image={carta.img}
              alt={carta.nome}
              borderClass={
                carta.nomePack !== "Pack Padrão"
                  ? RaridadeBordaEspecial(carta.raridade)
                  : RaridadeBorda(carta.raridade)
              }
              className="w-32 h-44 object-cover rounded-md"
            />

            <CardDescSummon
              name={carta.nome}
              nomeAnime={carta.nomeAnime || ""}
              nomeManga={carta.nomeManga || ""}
              nomePack={carta.nomePack}
              raridade={carta.raridade}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventario;

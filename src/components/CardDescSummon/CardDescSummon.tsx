interface CardSummonProps {
  name?: string;
  nomeAnime?: string;
  nomeManga?: string;
  favorites?: number;
  nomePack?: string;
  raridade: string;
}

const rarityColors: Record<string, { text: string; bg: string }> = {
  "Comum": { text: "text-gray-300", bg: "bg-gray-800/30" },
  "Incomum": { text: "text-green-300", bg: "bg-green-900/30" },
  "Rara": { text: "text-blue-300", bg: "bg-blue-900/30" },
  "Épica": { text: "text-purple-300", bg: "bg-purple-900/30" },
  "Lendária": { text: "text-yellow-300", bg: "bg-yellow-900/30" },
};

const CardDescSummon = ({
  name,
  favorites,
  nomePack,
  raridade,
  nomeAnime,
  nomeManga,
}: CardSummonProps) => {
  const colors = rarityColors[raridade] || rarityColors["Comum"];

  return (
    <div className="relative w-70 max-w-70 p-4 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-2xl pointer-events-none"></div>

      <h2 className="text-xl font-bold text-white truncate mb-1">
        {name || "Nome Desconhecido"}
      </h2>

      <p className="text-sm text-gray-300 truncate">Pack: {nomePack || "Nome Pack"}</p>
      <p className="text-sm text-gray-300 truncate">Anime: {nomeAnime}</p>
      <p className="text-sm text-gray-300 truncate">Manga: {nomeManga}</p>

      <p className="text-sm text-red-400 flex items-center gap-1 mt-1">
        ❤️ Favoritos: {favorites ?? 0}
      </p>

      <p className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full ${colors.text} ${colors.bg}`}>
        {raridade}
      </p>
    </div>
  );
};

export default CardDescSummon;

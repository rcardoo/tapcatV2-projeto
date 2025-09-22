export const RaridadeBorda = (raridade: string): string => {
    switch (raridade) {
      case "Lendária":
        return "border-4 border-yellow-400 shadow-[0_0_70px_30px_rgba(202,138,4,0.25)]";
      case "Épica":
        return "border-4 border-purple-500 shadow-[0_0_70px_30px_rgba(126,34,206,0.25)]";
      case "Rara":
        return "border-4 border-blue-400 shadow-[0_0_70px_30px_rgba(37,99,235,0.25)]";
      case "Incomum":
        return "border-4 border-green-400 shadow-[0_0_35px_10px_rgba(22,163,74,0.25)]";
      default:
        return "border-4 border-slate-400 shadow-[0_0_30px_8px_rgba(71,85,105,0.2)]";
    }
  };
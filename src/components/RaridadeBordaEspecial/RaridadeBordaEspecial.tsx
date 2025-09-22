export const RaridadeBordaEspecial = (raridade: string): string => {
    switch (raridade) {
      case "Main":
        return "border-4 border-red-600 shadow-[0_0_70px_30px_rgba(255,50,50,0.25)]";
      default:
        return "border-4 border-green-400 shadow-[0_0_35px_10px_rgba(22,163,74,0.25)]";
    }
  };
export const Raridade = (favorites?: number): string => {
    if (!favorites) return "Comum";
  
    if (favorites >= 86271) return "Lendária";
    if (favorites >= 19397) return "Épica";
    if (favorites >= 9333) return "Rara";
    if (favorites >= 6433) return "Incomum";
    return "Comum";
  };
  
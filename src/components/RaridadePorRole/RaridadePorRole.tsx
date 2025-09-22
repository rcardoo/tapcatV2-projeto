export const RaridadePorRole = (role: string): string => {
  switch (role) {
    case "Main":
      return "Lendária"; 
    case "Supporting":
      return "Incomum"; 
    default:
      return "Comum";
  }
};

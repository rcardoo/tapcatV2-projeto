import type { ReactNode } from "react";
import { useAuth } from "../src/context/UserContext";
import { Navigate } from "react-router-dom";

import Menu from "./components/Menu/Menu";

interface RotaPrivadaProps {
  children: ReactNode;
}

const RotaPrivada = ({ children }: RotaPrivadaProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Menu />
      <>{children}</>
    </>
  );
};

export default RotaPrivada;

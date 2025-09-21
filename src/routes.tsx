import { createBrowserRouter } from "react-router-dom";

import RotaPrivada from "./RotaPrivada";

import App from "./App";
import Login from "./pages/Login/Login";
import Game from "./pages/Game/Game";
import Perfil from "./pages/Perfil/Perfil";
import GachaMenu from "./pages/GachaMenu/GachaMenu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/game",
        element: <RotaPrivada><Game /></RotaPrivada>,
    },
    {
        path: "/perfil",
        element: <RotaPrivada><Perfil /></RotaPrivada>
    },
    {
        path: "/gacha",
        element: <RotaPrivada><GachaMenu /></RotaPrivada>
    }
])

export default router;
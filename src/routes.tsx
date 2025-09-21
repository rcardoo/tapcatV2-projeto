import { createBrowserRouter } from "react-router-dom";

import RotaPrivada from "./RotaPrivada";

import App from "./App";
import Login from "./pages/Login/Login";
import Game from "./pages/Game/Game";
import Perfil from "./pages/Perfil/Perfil";
import GachaMenu from "./pages/GachaMenu/GachaMenu";
import GacnhaEspecial from "./pages/GachaEspecial/GacnhaEspecial";
import GachaNormal from "./pages/GachaNormal/GachaNormal";

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
        element: <RotaPrivada><Game /></RotaPrivada>
    },
    {
        path: "/perfil",
        element: <RotaPrivada><Perfil /></RotaPrivada>
    },
    {
        path: "/gacha",
        element: <RotaPrivada><GachaMenu /></RotaPrivada>
    },
    {
        path: "/gacha/especial-pack/:id",
        element: <RotaPrivada><GacnhaEspecial/></RotaPrivada>
    },
    {
        path: "/gacha/normal-pack",
        element: <RotaPrivada><GachaNormal/></RotaPrivada>
    }
])

export default router;
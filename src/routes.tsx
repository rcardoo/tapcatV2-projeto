import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import Game from "./pages/Game/Game";

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
        element: <Game />,
    },
])

export default router;
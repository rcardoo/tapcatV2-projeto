import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

import { AuthProvider } from "../src/context/UserContext.tsx";
import { UserDataProvider } from "../src/context/UserDataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <RouterProvider router={router} />
      </UserDataProvider>
    </AuthProvider>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./bootstrap.min.css";
import App from "./App";
import ErrorPage from "./error-page";
import Login from "./pages/Login";
import SecretPage from "./pages/SecretPage";
import { AuthProvider } from "./AuthContext";
import PublicPage from "./pages/PublicPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "public-page",
        element: <PublicPage />,
      },
      {
        path: "secret-page",
        element: <SecretPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

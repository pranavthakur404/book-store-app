import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Categories,
  Contact,
  Home,
  Details,
  CartPage,
  Login,
} from "./pages";
import CartContext from "./context/CartContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Auth from "./components/Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Auth>
            <Home />
          </Auth>
        ),
      },
      {
        path: "/about",
        element: (
          <Auth>
            <About />
          </Auth>
        ),
      },
      {
        path: "/categories",
        element: (
          <Auth>
            <Categories />
          </Auth>
        ),
      },
      {
        path: "/contact",
        element: (
          <Auth>
            <Contact />
          </Auth>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Auth>
            <Details />
          </Auth>
        ),
      },
      {
        path: "/cart",
        element: (
          <Auth>
            <CartPage />
          </Auth>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartContext>
      <RouterProvider router={router} />
    </CartContext>
  </AuthProvider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { router } from "@/app/router/router";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "./context/SearchContext";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchProvider>
      <CartProvider>
        <RouterProvider router={router} />

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2200,

            style: {
              borderRadius: "24px",
              background: "rgba(255,255,255,0.92)",
              color: "#2f2f2f",
              border: "1px solid rgba(0,0,0,0.06)",
              backdropFilter: "blur(18px)",
              padding: "18px 24px",
              minWidth: "340px",
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,.12)",
              fontSize: "15px",
              fontWeight: "500",
            },

            success: {
              iconTheme: {
                primary: "#A67C52",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </CartProvider>
    </SearchProvider>
  </StrictMode>,
);

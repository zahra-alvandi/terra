import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";

import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children : [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);

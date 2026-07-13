import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import ProductPage from "@/pages/ProductPage";

import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import OrderSuccessPage from "@/pages/OrderSuccessPage";
import OrderTrackingPage from "@/pages/OrderTrackingPage";
import AdminLayout from "@/components/admin/AdminLayout";

import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import AdminOrdersPage from "@/pages/admin/AdminOrdersPage";
import AdminProductPage from "@/pages/admin/AdminProductPage";
import AdminCustomersPage from "@/pages/admin/AdminCustomersPage";
import AdminSettingsPage from "@/pages/admin/AdminSettingsPage";
import AdminGuardLayout from "@/components/admin/AdminGuardLayout";
import AdminLoginPage from "@/pages/admin/AdminLoginPage";
import AdminOrderDetailsPage from "@/pages/admin/AdminOrderDetailsPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:slug",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/order-success",
        element: <OrderSuccessPage />,
      },
      {
        path: "/track-order",
        element: <OrderTrackingPage />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },

  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },

  {
    path: "/admin",
    element: <AdminGuardLayout />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <AdminDashboardPage />,
          },
          {
            path: "orders",
            element: <AdminOrdersPage />,
          },
          {
            path: "products",
            element: <AdminProductPage />,
          },
          {
            path: "customers",
            element: <AdminCustomersPage />,
          },
          {
            path: "settings",
            element: <AdminSettingsPage />,
          },
          {
            path: "orders/:id",
            element: <AdminOrderDetailsPage />,
          },
        ],
      },
    ],
  },
]);

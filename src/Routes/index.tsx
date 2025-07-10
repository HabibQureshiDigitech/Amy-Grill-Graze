import { ConfigProvider } from "antd";
import DashboardLayout from "../AdminDashboard/Layout/DashboardLayout";
import DashboardPage from "../AdminDashboard/Pages/DashboardPage/DashboardPage";
import ProductPage from "../AdminDashboard/Pages/ProductsPage/ProductPage";
import HomePage from "../Pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../NotFound";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  
  {
    path: '/dashboard',
    element: (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ffffff",
            fontFamily: "DM Sans",
          },
          components: {
            Menu: {
              itemSelectedBg: "#e2e8f0",
              itemColor: "#ffffff",
              colorBgBase: "#FAFAF2",
            },
            Layout: {
              colorBgHeader: "#ffffff",
              colorBgBody: "#f8fafc",
            },
            Checkbox: {
              colorPrimary: "#059669",
              colorPrimaryActive: "#10b981",
              colorPrimaryHover: "#4ade80",
            },
          },
        }}
      >
        <DashboardLayout />
      </ConfigProvider>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "/dashboard/products", element: <ProductPage /> },
    ]
  },

  {
    path: '*',
    element: <NotFound />
  },


])

export default routes

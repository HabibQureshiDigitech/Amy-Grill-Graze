import { ConfigProvider } from "antd";
import DashboardLayout from "../AdminDashboard/Layout/DashboardLayout";
import DashboardPage from "../AdminDashboard/Pages/DashboardPage/DashboardPage";
import ProductPage from "../AdminDashboard/Pages/ProductsPage/ProductPage";
import HomePage from "../Pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../NotFound";
import AboutPage from "../Pages/AboutPage";
import MenuPage from "../Pages/MenuPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/menu',
    element: <MenuPage />
  },
  
  {
    path: '/dashboard',
    element: (
      <ConfigProvider
       theme={{
  token: {
    colorPrimary: "#000000",      // Yellow-600 as the primary accent
    // colorPrimary: "#CA8A04",      // Yellow-600 as the primary accent
    fontFamily: "DM Sans",
  },
  components: {
    Menu: {
      itemSelectedBg: "#CA8A04",         // Yellow when selected
      itemColor: "#FFFFFF",             // White text
      colorBgBase: "#000000",          // Menu background black
    },
    Layout: {
      colorBgHeader: "#000000",        // Black header
      colorBgBody: "#000000",          // Black body
    },
    Checkbox: {
      colorPrimary: "#CA8A04",         // Yellow checkbox
      colorPrimaryActive: "#CA8A04",   // Yellow active
      colorPrimaryHover: "#CA8A04",    // Yellow hover
    },
    Radio: {
      colorPrimary: "#CA8A04",         // Yellow for radios
      colorPrimaryHover: "#CA8A04",
      colorPrimaryActive: "#CA8A04",
    },
    Button: {
      colorPrimary: "#CA8A04",         // Yellow buttons
      colorPrimaryHover: "#EAB308",   // Slightly lighter yellow on hover
      colorText: "#FFFFFF",           // White text
    },
    Input: {
      colorBorder: "#CA8A04",          // Yellow border
      colorText: "#FFFFFF",            // White text
      colorBgBase: "#000000",          // Black input background
    },
    // Icon: {
    //   colorPrimary: "#CA8A04",         // Yellow icons
    //   colorPrimaryHover: "#EAB308",
    // },
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

import React, { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
import MainLayout from "components/layouts/main.layout"
import AdminLayout from "components/layouts/admin.layout"
import Loadable from "./loadable"
import Loader from "components/common/loader.common"

const NotFound = Loadable("pages/warning/404")
const Unauthorized = Loadable("pages/warning/401")
const Forbidden = Loadable("pages/warning/403")
const Login = Loadable(lazy(() => import("pages/login")))
const Home = Loadable(lazy(() => import("pages/home")))
const AdminDashboard = Loadable(
  lazy(() => import("pages/admin/dashboard")),
  { roles: ["ADMIN"] }
)
const Management = Loadable(
  lazy(() => import("pages/admin/management")),
  { roles: ["ADMIN"] }
)

export const HomeRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  errorElement: <Loader />,
  children: [
    { index: true, element: <Home /> },
    { path: "about", element: <Home title="About" /> },
    { path: "login", element: <Login title="Login" /> },
    { path: "403", element: <Forbidden title="Forbidden" /> },
    { path: "401", element: <Unauthorized title="Unauthorized" /> },
    { path: "404", element: <NotFound title="NotFound" /> },
    { path: "*", element: <Navigate to="/404" /> },
  ],
}

export const AdminRoutes: RouteObject = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { index: true, element: <AdminDashboard /> },
    { path: "management", element: <Management /> },
  ],
}

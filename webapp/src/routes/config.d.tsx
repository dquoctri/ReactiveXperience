import React, { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
import MainLayout from "components/layouts/main.layout"
import AdminLayout from "components/layouts/admin.layout"
import Loadable from "./loadable"

const Home = Loadable(lazy(() => import("pages/home")))
const NotFound = Loadable(lazy(() => import("pages/warning/404")))
const Unauthorized = Loadable(lazy(() => import("pages/warning/401")))
const Forbidden = Loadable(lazy(() => import("pages/warning/403")))
const ServerError = Loadable(lazy(() => import("pages/warning/500")))
const Login = Loadable(lazy(() => import("pages/login")))

const CustomHookLayout = Loadable(lazy(() => import("pages/custom-hook/custom-hook.layout")))
const MainHookPage = Loadable(lazy(() => import("pages/custom-hook/main.page")))
const DebouseHookPage = Loadable(lazy(() => import("pages/custom-hook/debouse.page")))

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
  errorElement: <ServerError />,
  children: [
    { index: true, element: <Home /> },
    { path: "about", element: <Home title="About" /> },
    { path: "403", element: <Forbidden title="Forbidden" /> },
    { path: "401", element: <Unauthorized title="Unauthorized" /> },
    { path: "404", element: <NotFound title="NotFound" /> },
    { path: "*", element: <Navigate to="/404" /> },
  ],
}

export const LoginRoutes: RouteObject = {
  path: "/login",
  element: <Login title="Login" />,
  errorElement: <ServerError />,
}

export const HookRoutes: RouteObject = {
  path: "/custom-hook",
  element: <CustomHookLayout />,
  errorElement: <ServerError />,
  children: [
    { index: true, element: <MainHookPage /> },
    { path: "debouse", element: <DebouseHookPage title="Debouse" /> },
  ],
}

export const AdminRoutes: RouteObject = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <ServerError />,
  children: [
    { index: true, element: <AdminDashboard /> },
    { path: "management", element: <Management /> },
  ],
}

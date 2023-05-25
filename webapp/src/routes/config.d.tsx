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

const FormYupLayout = Loadable(lazy(() => import("pages/form-yup/form-yup.layout")))
const FormRegisterPage = Loadable(lazy(() => import("pages/form-yup/form-register.page")))

const APICallLayout = Loadable(lazy(() => import("pages/api-call/api-call.layout")))
const FetchAPiPage = Loadable(lazy(() => import("pages/api-call/fetch-api.page")))

const CustomHookLayout = Loadable(lazy(() => import("pages/custom-hook/custom-hook.layout")))
const DebouseHookPage = Loadable(lazy(() => import("pages/custom-hook/debouse.page")))
const LocalStoragePage = Loadable(lazy(() => import("pages/custom-hook/local-storage.page")))
const ScrollPositionPage = Loadable(lazy(() => import("pages/custom-hook/scroll-position.page")))
const PaginationPage = Loadable(lazy(() => import("pages/custom-hook/pagination.page")))
const AuthenticationPage = Loadable(lazy(() => import("pages/custom-hook/auth-login.page")))

const StateManagementLayout = Loadable(lazy(() => import("pages/state-management/state-management.layout")))
const WithOutPage = Loadable(
  lazy(() => import("pages/state-management/without-state-management/without-state-management.page"))
)
const ContextPage = Loadable(lazy(() => import("pages/state-management/context/context.page")))
const ReduxPage = Loadable(lazy(() => import("pages/state-management/redux/redux.page")))

const AdminDashboard = Loadable(
  lazy(() => import("pages/admin/dashboard")),
  { roles: ["ADMIN"] }
)
const Management = Loadable(
  lazy(() => import("pages/admin/management")),
  { roles: ["ADMIN"] }
)

const routes: RouteObject[] = [
  {
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
  },
  {
    path: "/form-yup",
    element: <FormYupLayout />,
    errorElement: <ServerError />,
    children: [
      { index: true, element: <FormRegisterPage /> },
      { path: "form-register", element: <FormRegisterPage /> },
    ],
  },
  {
    path: "/api-call",
    element: <APICallLayout />,
    errorElement: <ServerError />,
    children: [
      { index: true, element: <FetchAPiPage /> },
      { path: "fetch-api", element: <FetchAPiPage /> },
    ],
  },
  {
    path: "/custom-hook",
    element: <CustomHookLayout />,
    errorElement: <ServerError />,
    children: [
      { index: true, element: <DebouseHookPage /> },
      { path: "debouse", element: <DebouseHookPage title="Debouse" /> },
      { path: "local-storage", element: <LocalStoragePage title="Local Storage" /> },
      { path: "scroll-position", element: <ScrollPositionPage title="Scroll Position" /> },
      { path: "pagination", element: <PaginationPage title="Pagination" /> },
      { path: "authentication", element: <AuthenticationPage title="Authentication" /> },
    ],
  },
  {
    path: "/state-management",
    element: <StateManagementLayout />,
    errorElement: <ServerError />,
    children: [
      { index: true, element: <ReduxPage /> },
      { path: "without", element: <WithOutPage /> },
      { path: "context", element: <ContextPage /> },
      { path: "redux", element: <ReduxPage /> },
    ],
  },
  {
    path: "/login",
    element: <Login title="Login" />,
    errorElement: <ServerError />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ServerError />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "management", element: <Management /> },
    ],
  }
]

export default routes
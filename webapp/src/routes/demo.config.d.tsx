import React, { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
import Loadable from "./loadable"
import Loader from "components/common/loader.common"

const HomePage = Loadable(lazy(() => import("pages/route/home")))
const AboutPage = Loadable(lazy(() => import("pages/route/about")))
const ContactPage = Loadable(lazy(() => import("pages/route/contact")))
const ProductPage = Loadable(lazy(() => import("pages/route/product")))
const NextPage = Loadable(lazy(() => import("pages/route/next")))
const ProductLayout = Loadable(lazy(() => import("pages/route/product.layout")))
const MainLayout = Loadable(lazy(() => import("pages/route/main.layout")))

const NotFound = Loadable(lazy(() => import("pages/warning/404")))
const Unauthorized = Loadable(lazy(() => import("pages/warning/401")))
const Forbidden = Loadable(lazy(() => import("pages/warning/403")))

export const MainRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  errorElement: <Loader />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "about", element: <AboutPage title="About" /> },
    { path: "contact", element: <ContactPage title="Login" /> },
    { path: "403", element: <Forbidden title="Forbidden" /> },
    { path: "401", element: <Unauthorized title="Unauthorized" /> },
    { path: "404", element: <NotFound title="NotFound" /> },
    { path: "*", element: <Navigate to="/404" /> },
  ],
}

export const ProductRoutes: RouteObject = {
  path: "/product",
  element: <ProductLayout />,
  children: [
    { index: true, element: <ProductPage /> },
    { path: ":productId", element: <ProductPage /> },
  ],
}

export const NextRoutes: RouteObject = {
  path: "/next",
  element: <NextPage />
}



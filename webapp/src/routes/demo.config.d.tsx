import React, { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
import ServerError from "pages/warning/500"

const HomePage = lazy(() => import("pages/route/home.page"))
const AboutPage = lazy(() => import("pages/route/about.page"))
const ContactPage = lazy(() => import("pages/route/contact.page"))
const ProductPage = lazy(() => import("pages/route/product.page"))
const NextPage = lazy(() => import("pages/route/next.page"))
const ProductLayout = lazy(() => import("pages/route/product.layout"))
const MainLayout = lazy(() => import("pages/route/main.layout"))

const NotFound = lazy(() => import("pages/warning/404"))
const Unauthorized = lazy(() => import("pages/warning/401"))
const Forbidden = lazy(() => import("pages/warning/403"))

const demoRoutes: RouteObject[] = [{
  path: "/",
  element: <MainLayout />,
  errorElement: <ServerError />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "about", element: <AboutPage title="About" /> },
    { path: "contact", element: <ContactPage title="Login" /> },
    { path: "403", element: <Forbidden /> },
    { path: "401", element: <Unauthorized /> },
    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" /> },
  ],
},
{
  path: "/product",
  element: <ProductLayout />,
  children: [
    { index: true, element: <ProductPage /> },
    { path: ":productId", element: <ProductPage /> },
    { path: "next", element: <NextPage /> },
  ],
}]

export default demoRoutes

import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import HomePage from "pages/route/home"
import AboutPage from "pages/route/about"
import ContactPage from "pages/route/contact"
import ProductPage from "pages/route/product"
import NextPage from "pages/route/next"
import ProductLayout from "pages/route/product.layout"
import MainLayout from "pages/route/main.layout"

const DemoRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<>Not found</>} />
        </Route>
        <Route element={<ProductLayout />}>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Route>
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </>
  )
}

export default DemoRoutes

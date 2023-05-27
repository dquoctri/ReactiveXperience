import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "pages/route/home.page"
import AboutPage from "pages/route/about.page"
import ContactPage from "pages/route/contact.page"
import ProductPage from "pages/route/product.page"
import NextPage from "pages/route/next.page"
import ProductLayout from "pages/route/product.layout"
import MainLayout from "pages/route/main.layout"

const DemoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<>Not found</>} />
      </Route>
      <Route path="/product" element={<ProductLayout />}>
        <Route index element={<ProductPage />} />
        <Route path=":productId" element={<ProductPage />} />
        <Route path="next" element={<NextPage />} />
      </Route>
    </Routes>
  )
}

export default DemoRoutes

import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "pages/route/home"
import AboutPage from "pages/route/about"
import ContactPage from "pages/route/contact"
import ProductPage from "pages/route/product"

const DemoRoutes = () => {
  return (
    <>
      <div className="demo">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contract">Contract</a>
            </li>
            <li>
              <a href="/contract">Product</a>
            </li>
            <li>
              <a href="/product/1">Product1</a>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact?:" element={<ContactPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default DemoRoutes

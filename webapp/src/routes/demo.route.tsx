import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import HomePage from "pages/route/home"
import AboutPage from "pages/route/about"
import ContactPage from "pages/route/contact"
import ProductPage from "pages/route/product"

const _ANavBar = (<>
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
          <a href="/contact">Contract</a>
        </li>
        <li>
          <a href="/contact?email=vy.doan@mango.dqtri.com&age=0">Contract Mango</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/product/1">Product1</a>
        </li>
        <li>
          <a href="/product/2">Product2</a>
        </li>
      </ul>
    </nav>
  </div>
</>)

const LinkNacBar = (<>
  <div className="demo">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contract</Link>
        </li>
        <li>
          <Link to="/contact?email=vy.doan@mango.dqtri.com&age=0">Contract Mango</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/product/1">Product1</Link>
        </li>
        <li>
          <Link to="/product/2">Product2</Link>
        </li>
      </ul>
    </nav>
  </div>
</>)

const DemoRoutes = () => {
  return (
    <>
      {LinkNacBar}
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </>
  )
}

export default DemoRoutes

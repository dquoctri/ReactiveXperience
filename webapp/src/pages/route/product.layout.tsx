import React from "react"
import { Outlet, Link } from "react-router-dom"

const LinkNacBar = () => (<>
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
        <li>
          <Link to="/next">Next</Link>
        </li>
      </ul>
    </nav>
  </div>
</>)

const ProductLayout = () => {
  return (
    <>
      <p>Product layout</p>
      <LinkNacBar />
      <section className="product">
        <Outlet />
      </section>
    </>
  )
}

export default ProductLayout


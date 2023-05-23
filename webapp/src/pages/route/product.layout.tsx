import React from "react"
import { Outlet } from "react-router-dom"
import Nav from "./nav.components"

const ProductLayout = () => {
  return (
    <>
      <p>Product layout</p>
      <Nav />
      <section className="product">
        <Outlet />
      </section>
    </>
  )
}

export default ProductLayout

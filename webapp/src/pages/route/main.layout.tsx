import React from "react"
import { Outlet } from "react-router-dom"

const ANavBar = () => (
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
            <a href="/contact">Contract</a>
          </li>
          <li>
            <a href="/contact?email=vy.doan@mango.dqtri.com&age=0">Contract Mango</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

const MainLayout = () => {
  return (
    <>
      <p>Main layout</p>
      <ANavBar />
      <section className="main">
        <Outlet />
      </section>
    </>
  )
}

export default MainLayout
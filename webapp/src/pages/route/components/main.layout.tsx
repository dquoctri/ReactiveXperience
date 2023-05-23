import React from "react"
import { Outlet } from "react-router-dom"
import Nav from "./nav"

const MainLayout = () => {
  return (
    <>
      <p>Main layout</p>
      <Nav />
      <section className="main">
        <Outlet />
      </section>
    </>
  )
}

export default MainLayout

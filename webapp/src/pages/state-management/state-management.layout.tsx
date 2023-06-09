import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"
import Nav from "./state-nav.components"

const ReduxLayout = () => {
  return (
    <>
      <MainNav />
      <Nav />
      <section className="redux">
        <Outlet />
      </section>
    </>
  )
}

export default ReduxLayout

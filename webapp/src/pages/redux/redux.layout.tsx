import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"
import Nav from "./redux-nav.components"

const ReduxLayout = () => {
  return (
    <>
      <MainNav />
      <p>Redux layout</p>
      <Nav />
      <section className="redux">
        <Outlet />
      </section>
    </>
  )
}

export default ReduxLayout

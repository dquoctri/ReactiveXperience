import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"
import Nav from "./form-yup-nav.component"

const ReduxLayout = () => {
  return (
    <>
      <MainNav />
      <p>State management layout</p>
      <Nav />
      <section className="redux">
        <Outlet />
      </section>
    </>
  )
}

export default ReduxLayout

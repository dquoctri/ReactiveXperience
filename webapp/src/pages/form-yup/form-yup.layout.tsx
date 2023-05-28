import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"
import Nav from "./form-yup-nav.component"

const ReduxLayout = () => {
  return (
    <>
      <MainNav />
      <Nav />
      <p>React Hook Form layout</p>
      <section className="redux">
        <Outlet />
      </section>
    </>
  )
}

export default ReduxLayout

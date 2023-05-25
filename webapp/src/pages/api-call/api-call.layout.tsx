import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"
import ApiCallNav from "./api-call.nav.component"

const ReduxLayout = () => {
  return (
    <>
      <MainNav />
      <p>State management layout</p>
      <ApiCallNav />
      <section className="redux">
        <Outlet />
      </section>
    </>
  )
}

export default ReduxLayout

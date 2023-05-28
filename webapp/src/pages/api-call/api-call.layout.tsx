import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"
import ApiCallNav from "./api-call.nav.component"

const ReduxLayout = () => {
  return (
    <>
      <MainNav />
      <p>API Call layout</p>
      <ApiCallNav />
      <section className="redux">
        <Outlet />
      </section>
    </>
  )
}

export default ReduxLayout

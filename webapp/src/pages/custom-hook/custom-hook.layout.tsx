import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"
import CustomHookNav from "./nav.components"

const CustomHookLayout = () => {
  return (
    <>
      <MainNav />
      <CustomHookNav />
      <section className="custom-hook">
        <Outlet />
      </section>
    </>
  )
}

export default CustomHookLayout

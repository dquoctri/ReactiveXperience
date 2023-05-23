import React from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"
import CustomHookNav from "./custom-nav.components"

const CustomHookLayout = () => {
  return (
    <>
      <MainNav />
      <p>CustomHookLayout</p>
      <CustomHookNav />

      <section className="custom-hook">
        <Outlet />
      </section>
    </>
  )
}

export default CustomHookLayout

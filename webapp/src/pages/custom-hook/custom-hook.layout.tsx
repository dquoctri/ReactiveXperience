import React from "react"
import { Outlet } from "react-router-dom"

const CustomHookLayout = () => {
  return (
    <>
      <p>CustomHookLayout</p>
      <section className="custom-hook">
        <Outlet />
      </section>
    </>
  )
}

export default CustomHookLayout
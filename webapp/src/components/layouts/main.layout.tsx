import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"

const MainLayout = () => {
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </Fragment>
  )
}

export default MainLayout

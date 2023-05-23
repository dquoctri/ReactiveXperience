import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"
import MainNav from "components/nav.component"

const AdminLayout = () => {
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <Outlet />
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  )
}

export default AdminLayout

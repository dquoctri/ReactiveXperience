import React, { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <Fragment>
      <header>
        {/* <Header /> */}
        <Link to="/">home </Link>
        <Link to="/admin">admin</Link>
        <Link to="/admin/management">dashboard </Link>
      </header>
      <Outlet />
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  )
}

export default AdminLayout

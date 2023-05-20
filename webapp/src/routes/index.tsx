import React from 'react'
import { useRoutes } from 'react-router-dom'
// import { MainRoutes, AdminRoutes } from "./config.d"

const AppRoutes = () => {
  const routing = useRoutes([])
  return <>{routing}</>
}

export default AppRoutes

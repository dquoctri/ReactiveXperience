import React from "react"
import { useRoutes } from "react-router-dom"
// import Loader from "components/common/loader.common"
import routes from "./config.d"
import _demoRoutes from "./demo.config.d"

const AppRoutes = () => {
  
  // const routing = useRoutes(_demoRoutes)
  // return <>
  //   <Suspense fallback={<Loader text="Component loading..." />}>{routing}</Suspense>
  // </>

  const routing = useRoutes(routes)
  return <>{routing}</>
}

export default AppRoutes

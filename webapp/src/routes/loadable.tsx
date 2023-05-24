import React, { Suspense, LazyExoticComponent } from "react"
import Loader from "../components/common/loader.common"
import ProtectedRoute from "./protected.route"
import ProtectedProps from "./protected.type"

const Loadable = (Component: LazyExoticComponent<(ref: any) => JSX.Element>, protectedProps?: ProtectedProps) => {
  const render = (props: any) => {
    return (
      <ProtectedRoute {...protectedProps}>
        <Suspense fallback={<Loader text="Component loading..." />}>
          <Component {...props} />
        </Suspense>
      </ProtectedRoute>
    )
  }
  return render
}

export default Loadable

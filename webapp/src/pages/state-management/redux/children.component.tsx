import React, { Fragment, useContext } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { ThemeContext } from "./context.component"
const ChildrenComponent = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const theme = useContext(ThemeContext)
  return (
    <Fragment>
      <div style={{ border: "2px solid " + theme, padding: 10, margin: 5 }}>
        <h1 style={{ color: theme }}>Children component</h1>
        <div>
          <div style={{ width: "auto", padding: 10 }}>
            <div>
              Theme: <b style={{ color: theme }}>{theme}</b> count <b style={{ color: theme }}>{count}</b>
            </div>
            <div style={{ padding: 10, margin: 10 }}>
              <p style={{ color: theme }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ullamco laboris nisi ut
                aliquip ex commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ChildrenComponent

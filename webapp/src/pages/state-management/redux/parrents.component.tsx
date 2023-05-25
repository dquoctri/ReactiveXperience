import React, { Fragment } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import ChildrenComponent from "./children.component"

const ParentsComponent = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  return (
    <Fragment>
      <div style={{ border: "2px solid black", width: "auto", padding: 10, margin: "4%", display: "block" }}>
        <h1>Parents component</h1>
        <div>
          <div>Theme: count {count}</div>
          <div style={{ width: "auto", padding: 10, margin: 10 }}>
            <ChildrenComponent />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ParentsComponent

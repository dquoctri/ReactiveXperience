import React, { Fragment } from "react"
import ChildrenComponent from "./children.component"

const ParentsComponent = () => {
  return (
    <Fragment>
      <div style={{ border: "2px solid black", width: "auto", padding: 10, margin: "4%", display: "block" }}>
        <h1>Parents component</h1>
        <div>
          <div style={{ width: "auto", display: "flex", padding: 5 }}>
            <ChildrenComponent />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ParentsComponent

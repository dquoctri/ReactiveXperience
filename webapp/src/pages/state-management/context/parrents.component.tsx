import React, { Fragment } from "react"
import ChildrenComponent from "./children.component"

const ParentsComponent = () => {
  return (
    <Fragment>
      <div style={{ border: "2px solid black", width: "auto", padding: 5, margin: "4%", display: "block" }}>
        <h3>Parents component</h3>
        <div style={{ width: "auto", padding: 5 }}>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div style={{ width: "auto", display: "flex", padding: 5, margin: 5 }}>
            <ChildrenComponent />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ParentsComponent

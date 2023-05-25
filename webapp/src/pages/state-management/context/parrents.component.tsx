import React, { Fragment } from "react"
import ChildrenComponent from "./children.component"

const ParentsComponent = () => {
  return (
    <Fragment>
      <div style={{ border: "2px solid black", width: "auto", padding: 10, margin: "4%", display: "block" }}>
        <h1>Parents component</h1>
        <div>
          <div style={{ width: "auto", padding: 10 }}>
            <div>Theme: </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div style={{ width: "auto", padding: 10, margin: 10 }}>
              <ChildrenComponent />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ParentsComponent

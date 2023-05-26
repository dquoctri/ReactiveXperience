import React, { Fragment } from "react"
import ChildrenComponent from "./children.component"

interface Pros {
  theme?: string
}

const ParentsComponent = ({ theme }: Pros) => {
  return (
    <Fragment>
      <div style={{ border: "2px solid " + (theme ?? "black"), padding: 10 }}>
        <h1 style={{ color: theme }}>Parents component</h1>
        <div>
          <div style={{ width: "auto", padding: 10 }}>
            <div>
              Theme: <b style={{ color: theme }}>{theme}</b>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <div style={{ width: "auto", display: "flex", padding: 5, margin: 5 }}>
              <ChildrenComponent theme={theme} />
              <ChildrenComponent theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ParentsComponent

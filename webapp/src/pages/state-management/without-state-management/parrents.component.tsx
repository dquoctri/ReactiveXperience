import React, { Fragment } from "react"
import ChildrenComponent from "./children.component"

interface Pros {
  theme: string
}

const ParentsComponent = ({ theme }: Pros) => {
  return (
    <Fragment>
      <div style={{ border: "2px solid " + theme, padding: 10 }}>
        <h1 style={{ color: theme }}>Parents component</h1>
        <div>
          <div style={{ width: "auto", padding: 10 }}>
            <div>
              Theme: <b style={{ color: theme }}>{theme}</b>
            </div>
            <p style={{ color: theme }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <ChildrenComponent theme={theme} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ParentsComponent

import React, { Fragment } from "react"

interface Pros {
  theme: string
}

const ChildrenComponent = ({ theme }: Pros) => {
  return (
    <Fragment>
      <div style={{ border: "2px solid " + theme, padding: 10 }}>
        <h1 style={{ color: theme }}>Children component</h1>
        <div>
          <div style={{ width: "auto", padding: 10 }}>
            <div>
              Theme: <b style={{ color: theme }}>{theme}</b>{" "}
            </div>
            <p style={{ color: theme }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ChildrenComponent

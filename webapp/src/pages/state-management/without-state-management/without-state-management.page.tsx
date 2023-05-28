import React, { Fragment, useState } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"
import ParrentComponent from "./parrents.component"

const ContextComponent = ({ title }: PageProps) => {
  const [theme, setTheme] = useState("black")
  const toggleThemeRed = () => {
    setTheme("red")
  }
  const toggleThemeBlue = () => {
    setTheme("blue")
  }
  const toggleThemeGreen = () => {
    setTheme("green")
  }

  return (
    <Fragment>
      <PageTitle title={title ? title : "Hello, Xoài"} />
      <div style={{ border: "2px solid " + theme, width: "auto", padding: 5, margin: "0 4% 0 4%", display: "block" }}>
        <h1>Share state without state management</h1>
        <div style={{ width: "auto", padding: 10 }}>
          <div>
            Theme: <b style={{ color: theme }}>{theme}</b>
          </div>
          <div>
            <button onClick={toggleThemeRed} style={{ margin: 10 }}>
              Toggle Red
            </button>
            <button onClick={toggleThemeBlue} style={{ margin: 10 }}>
              Toggle Blue
            </button>
            <button onClick={toggleThemeGreen} style={{ margin: 10 }}>
              Toggle Green
            </button>
          </div>
          <div>
            {/* <ParrentComponent /> */}
            <ParrentComponent theme={theme} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ContextComponent

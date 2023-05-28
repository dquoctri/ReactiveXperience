import React, { Fragment, useState, createContext } from "react"
import ParrentComponent from "./parrents.component"

export const ThemeContext = createContext<string>("black")
interface Pros {
  title: string
}

const ContextComponent = ({ title }: Pros) => {
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
      <ThemeContext.Provider value={theme}>
        <div style={{ border: "2px solid " + theme, width: "40%", padding: 10, margin: "0 4% 0 4%" }}>
          <h1 style={{ color: theme }}>{title}</h1>
          <div>
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
                <ParrentComponent />
              </div>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </Fragment>
  )
}

export default ContextComponent

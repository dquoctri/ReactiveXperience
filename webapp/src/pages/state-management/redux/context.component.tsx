import React, { Fragment, useState, createContext, useCallback } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import ParrentComponent from "./parrents.component"

export const ThemeContext = createContext<string>("")

interface Pros {
  title: string
}

const ContextComponent = ({ title }: Pros) => {
  const [theme, setTheme] = useState("black")
  const count = useSelector((state: RootState) => state.counter.count)
  const toggleThemeRed = useCallback(() => {
    setTheme("red")
  }, [])

  const toggleThemeBlue = () => {
    setTheme("blue")
  }

  const toggleThemeGreen = () => {
    setTheme("green")
  }

  return (
    <Fragment>
      <ThemeContext.Provider value={theme}>
        <div style={{ border: "2px solid " + theme, width: "40%", padding: 10, margin: "4%", display: "block" }}>
          <h1 style={{ color: theme }}>{title}</h1>
          <div>
            <div style={{ width: "auto", padding: 10 }}>
              <div>
                Theme: <b style={{ color: theme }}>{theme}</b> count {count}
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

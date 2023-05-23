import React from "react"
import ReactDOM from "react-dom/client"
import { CookiesProvider } from "react-cookie"
import { HelmetProvider } from "react-helmet-async"
import { Provider as ReduxProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import "./index.css"
import App from "./App"
import { store, persistor } from "./store"
import reportWebVitals from "./reportWebVitals"

const isDevelopment = process.env.NODE_ENV === "development"
const Envelop = isDevelopment ? React.StrictMode : React.Fragment
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <Envelop>
    <CookiesProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </PersistGate>
      </ReduxProvider>
    </CookiesProvider>
  </Envelop>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import { combineReducers } from "redux"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web and AsyncStorage for react-native
import { WebStorage } from "redux-persist/es/types"
import _storageSession from "reduxjs-toolkit-persist/lib/storage/session"
import { configureStore } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import logger from "./logger"
import _rootSaga from "./saga"

import CommonReducer from "./common/common.state"
import AuthenticationReducer from "./authentication/authentication.state"
import counterReducer from "./counter/counter.state"

// Create the saga middleware
const _sagaMiddleware = createSagaMiddleware()

const _cookieStorage: WebStorage = {
  getItem: async (key: string): Promise<string | null> => {
    const value = Cookies.get(key)
    return value ? Promise.resolve(value) : null
  },
  setItem: async (key: string, value: string) => {
    Cookies.set(key, value)
    return Promise.resolve()
  },
  removeItem: async (key: string) => {
    Cookies.remove(key)
    return Promise.resolve()
  },
}

const rootReducer = combineReducers({
  counter: counterReducer,
  common: CommonReducer,
  authentication: AuthenticationReducer,
})

export const persistConfig = {
  key: "root",
  storage,
  // storage: storageSession,
  // storage: cookieStorage,
  blacklist: ["authentication"], // blacklist will not be persisted
  whitelist: ["common", "counter"], // only whitelist will be persisted
}

const isDevelopment = process.env.NODE_ENV === "development"
export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: isDevelopment,
  middleware: isDevelopment ? [thunk, logger] : [thunk],
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

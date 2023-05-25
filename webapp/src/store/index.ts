import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web and AsyncStorage for react-native
import { WebStorage } from "redux-persist/es/types"

import thunk from "redux-thunk"
import _storageSession from "reduxjs-toolkit-persist/lib/storage/session"

import Cookies from "js-cookie"
import logger from "./logger"

import counterReducer from "./state"

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
})

export const persistConfig = {
  key: "root",
  storage,
  // storage: storageSession,
  // storage: cookieStorage,
  blacklist: ["counter"], // blacklist will not be persisted
  whitelist: [], // only whitelist will be persisted
}

const isDevelopment = process.env.NODE_ENV === "development"
export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: isDevelopment,
  middleware: isDevelopment ? [thunk, logger] : [thunk],
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

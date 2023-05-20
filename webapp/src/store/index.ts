import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import logger from './logger'

import { CommonReducer } from './common/common.state'
// import { AuthenticationReducer } from "./authentication.state"

// Create the saga middleware
const saga = createSagaMiddleware()

const rootReducer = combineReducers({
  common: CommonReducer,
  // authentication: AuthenticationReducer,
})

export const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['authentication'], // blacklist will not be persisted
  whitelist: ['global'], // only whitelist will be persisted
}

const isDevelopment = process.env.NODE_ENV === 'development'
export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: isDevelopment,
  middleware: isDevelopment ? [thunk, saga, logger] : [thunk, saga],
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

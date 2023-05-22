import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { configureStore } from '@reduxjs/toolkit'
import logger from './logger'
import rootSaga from './saga'

import { CommonReducer } from './common/common.state'
import { AuthenticationReducer } from './authentication/authentication.state'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  common: CommonReducer,
  authentication: AuthenticationReducer,
})

export const persistConfig = {
  key: 'root',
  storage,
  blacklist: [], // blacklist will not be persisted
  whitelist: ['common', 'authentication'], // only whitelist will be persisted
}

const isDevelopment = process.env.NODE_ENV === 'development'
export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: isDevelopment,
  middleware: isDevelopment ? [thunk, sagaMiddleware, logger] : [thunk, sagaMiddleware],
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

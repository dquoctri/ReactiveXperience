import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum AuthenticationType {
  SET_AUTHENTICATION = 'authentication/authentication',
}

export interface AuthenticationState {
  authenticated: boolean
  email: string
  roles: Array<string>
}

const initialState: AuthenticationState = { authenticated: false, email: '', roles: [] }

function AuthenticationReducer(state: AuthenticationState, action: PayloadAction<AuthenticationState>) {
  state.authenticated = action.payload.authenticated
  state.email = action.payload.email
  state.roles = action.payload.roles
}

const { reducer } = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authentication: AuthenticationReducer,
  },
})

export { reducer as AuthenticationReducer }

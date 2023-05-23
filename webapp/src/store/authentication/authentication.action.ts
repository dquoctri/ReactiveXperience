import { AuthenticationState, AuthenticationType } from "./authentication.state"

export const login = (data: AuthenticationState) => {
  return {
    type: AuthenticationType.SET_AUTHENTICATION,
    payload: data,
  }
}

export const logout = () => {
  return {
    type: AuthenticationType.SET_AUTHENTICATION,
    payload: { authenticated: false, email: "", roles: [] },
  }
}

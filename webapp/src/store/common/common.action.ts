import { CommonType } from "./common.state"

export const setLanguage = (payload: string) => {
  return {
    type: CommonType.SET_LANGUAGE,
    payload: payload,
  }
}

export const setTheme = (payload: string) => {
  return {
    type: CommonType.SET_MODE,
    payload: payload,
  }
}

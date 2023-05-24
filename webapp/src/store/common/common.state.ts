import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export enum CommonType {
  SET_LANGUAGE = "common/language",
  SET_MODE = "common/mode",
}

export interface CommonState {
  lng: string
  mode: string
}

const initialState: CommonState = { lng: "ENG", mode: "LIGHT" }

function LanguageReducer(state: CommonState, action: PayloadAction<string>) {
  state.lng = action.payload
}

function ModeReducer(state: CommonState, action: PayloadAction<string>) {
  state.mode = action.payload
}

const { reducer, actions } = createSlice({
  name: "common",
  initialState,
  reducers: {
    language: LanguageReducer,
    mode: ModeReducer,
  },
})

export const { language, mode } = actions
export default reducer

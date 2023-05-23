import { RootState } from ".."

export const modeSelector = (state: RootState) => state.common.mode
export const languageSelector = (state: RootState) => state.common.lng

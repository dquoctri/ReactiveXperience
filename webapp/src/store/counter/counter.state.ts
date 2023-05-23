import { createReducer } from "@reduxjs/toolkit"

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase("INCREMENT", state => {
      state.count += 1
    })
    .addCase("DECREMENT", state => {
      state.count -= 1
    })
})

export default counterReducer

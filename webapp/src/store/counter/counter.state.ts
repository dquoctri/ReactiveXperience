import { createReducer, createSlice } from "@reduxjs/toolkit"

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

const _counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
  },
})

// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer

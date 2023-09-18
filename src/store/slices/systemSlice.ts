import {createSlice} from '@reduxjs/toolkit'

export interface SystemState {
  isFire: boolean
}

const initialState: SystemState = {
  isFire: false,
}

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    toggleFire: (state, action) => {
      state.isFire = action.payload
    }
  }
})

export const {toggleFire} = systemSlice.actions

export default systemSlice.reducer

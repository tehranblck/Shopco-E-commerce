import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "null",
}
export const sexSlice = createSlice({
    name: 'sexSlice',
    initialState,

    reducers: {
        changeSexState: (state,action) => {
            state.value=action.payload
        }
    }
})

export const {changeSexState } = sexSlice.actions

export default sexSlice.reducer
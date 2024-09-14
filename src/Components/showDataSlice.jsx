import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: [],
}
  
export const showDataSlice = createSlice({
    name: 'showDataSlice',
    initialState,

    reducers: {
        addData: (state,action) => {
            state.value=action.payload
        }
    }
})

export const { addData } = showDataSlice.actions

export default showDataSlice.reducer
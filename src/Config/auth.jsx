import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
    reducers: {
        changeAuth: (state, action) => {
  
            state.value = action.payload
        }
    }
})

export const {changeAuth } = authSlice.actions

export default authSlice.reducer
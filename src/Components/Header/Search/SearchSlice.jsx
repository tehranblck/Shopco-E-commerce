import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
}

export const SearchSlice = createSlice({
  name: 'Searchproducts',
  initialState,
    reducers: {
        setSearched: (state,action) => {
            state.value=action.payload
      }
   
  },
})


export const {setSearched} = SearchSlice.actions

export default SearchSlice.reducer
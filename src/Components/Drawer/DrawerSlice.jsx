import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const DrawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    changeDrawer: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDrawer } = DrawerSlice.actions;

export default DrawerSlice.reducer;

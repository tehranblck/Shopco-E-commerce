import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}
const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem: (state,action)=>{
            state.items.push(action.payload)  ;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
          },
        clearCart: (state) => {
            state.items = [];
        },
        setBasket: (state, action) => {
            if (Array.isArray(action.payload)) {
                state.items = action.payload;
            } else {
                console.error('Payload should be an array');
            }
        }
        
    }
    
})

export const { addItem, removeItem, clearCart,setBasket } = basketSlice.actions;
export default basketSlice.reducer;
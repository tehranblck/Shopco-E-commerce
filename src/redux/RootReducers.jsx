import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Components/productSlice'
import SexSlice from '../Components/SexSlice'
import showDataSlice from '../Components/showDataSlice'
import SearchSlice from '../Components/Header/Search/SearchSlice'
import authSlice from '../Config/auth'
import DrawerSlice from '../Components/Drawer/DrawerSlice'
import basketSlice from '../Components/Basket/basketSlice'


const rootReducer = combineReducers({
    products: productReducer,
    sex: SexSlice,
    data: showDataSlice,
    search: SearchSlice,
    auth: authSlice,
    drawer: DrawerSlice,
    basket:basketSlice
});
  
export default rootReducer;
  
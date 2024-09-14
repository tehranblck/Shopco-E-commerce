import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Product_detail from '../Pages/Product-detail/Product_detail'
import Category from '../Pages/Category/Category'
import SingleProduct from '../Components/SingleProduct'
import SearchPage from '../Components/Header/Search/SearchPage'
import CreateAccount from '../Pages/CreateAccount/UserLogin'
import ForgotPasswordForm from '../Components/ForgotPassword/forgotPass'
import MyAccount from '../Pages/MyAccount/MyAccount'
import auth from './auth'
import LoginWithEmail from '../Pages/CreateAccount/LoginWithEmail/LoginWithEmail'
import Orders from '../Pages/Orders/Orders'
import Brands from '../Pages/Brands/Brands'

function Rout() {

  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product-detail" element={<Product_detail />}/>
          <Route path="/shop" element={<Category/>}/>
          <Route path="/shop/:sex" element={<Category />} />
          <Route path="/shop/:sex/:id" element={<SingleProduct />} />
          <Route path="/shop/:category" element={<Category />} />
          <Route path="/search-results" element={<SearchPage />} />
          <Route path="/new-arrivals" element={<SearchPage />} />
          <Route path="/top-sellings" element={<SearchPage />} />
          <Route path="/sign-in" element={<CreateAccount />} />
          <Route path="/sign-up" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      <Route path="/my-account" element={auth?<MyAccount/> :<LoginWithEmail/> } />
      <Route path="/orders" element={auth?<Orders/> :<LoginWithEmail/> } />
      <Route path="/brands" element={<Brands/>} />

      </Routes>
  )
}

export default Rout
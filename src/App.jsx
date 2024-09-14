import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Rout from './Config/Rout'
import { AuthProvider } from './redux/AuthContex'
import ScrollToTop from './Components/Services/ScrollToTop'

function App() {

  return (
    <>
      <AuthProvider >
        <Header />
      <Rout/>
        <Footer /> 
        <ScrollToTop/>
      </AuthProvider>
      
    </>
  )
}

export default App

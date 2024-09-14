import React from 'react'
import { Link } from 'react-router-dom'
import { NavLinks,NavA } from '../../col-2/Company_list/styled'
function Help() {
  return (
      <NavLinks>
          <li><NavA to={"/costumer_support"} >Costumer Support</NavA></li>
          <li><NavA to={"/delivery_details"} >Delivery Details</NavA></li>
          <li><NavA to={"/terms&conditions"} >Terms & Conditions</NavA></li>
          <li><NavA to={"/provacy_policy"} >Privacy Policy</NavA></li>
    </NavLinks>
  )
}

export default Help
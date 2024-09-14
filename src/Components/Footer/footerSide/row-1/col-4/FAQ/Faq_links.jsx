import React from 'react'
import { Link } from 'react-router-dom'
import { NavLinks,NavA } from '../../col-2/Company_list/styled'

function Faq_links() {
  return (
      <NavLinks>
          <li><NavA to={"/account"} >Account</NavA></li>
          <li><NavA to={"/deliveries"} >Manage Deliveries</NavA></li>
          <li><NavA to={"/orders"} >Orders</NavA></li>
          <li><NavA to={"/payments"} >Payments</NavA></li>
    </NavLinks>
  )
}

export default Faq_links
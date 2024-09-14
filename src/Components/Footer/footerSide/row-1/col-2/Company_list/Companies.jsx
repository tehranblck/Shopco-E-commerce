import React from 'react'
import { Link } from 'react-router-dom'
import { NavLinks,NavA } from './styled'

function Companies() {
  return (
      <NavLinks>
          <li><NavA to={"/about"}>About</NavA></li>
          <li><NavA to={"/features"}>Features</NavA></li>
          <li><NavA to={"/works"}>Works</NavA></li>
          <li><NavA to={"/career"}>Career</NavA></li>
    </NavLinks>
  )
}

export default Companies
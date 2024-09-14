import React from 'react'
import { Ul,NavLink } from './styled'


function Nav() {
  return (
    <nav>
        <Ul>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/shop/woman">Woman</NavLink></li>
          <li><NavLink to="/shop/man">Man</NavLink></li>
          <li><NavLink to="/new-arrivals">New Arrivals</NavLink></li>
          <li><NavLink to="/brands">Brands</NavLink></li>
        </Ul>
      </nav>
  )
}

export default Nav
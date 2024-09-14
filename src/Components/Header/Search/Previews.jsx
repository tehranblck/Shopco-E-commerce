import React from 'react'
import './style.css'

function Previews({ product }) {
    const { name,bigPhotoUrl,price } = product
  return (
      <div className='preview'>
          <img style={{ width: "50px" }} src={bigPhotoUrl} alt="" />
          <p className='name'>{name}</p>
          <p className='name'>{ price} $</p>
    </div>
  )
}

export default Previews
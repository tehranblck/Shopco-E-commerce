import React from 'react'
import { H1, Paragraph, Button } from '../styled'
import { useNavigate } from 'react-router-dom'

function Top() {
  const navigate=useNavigate()
  return (
      <div>
          <H1>Find chlotes that matches your style</H1>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus officiis iste.</Paragraph>
          <Button onClick={()=>{navigate('/shop')}}>Shop now</Button>
    </div>
  )
}

export default Top
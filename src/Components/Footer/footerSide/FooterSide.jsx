import React from 'react'
import Row_1 from './row-1/Row_1'
import Row_2 from './row-2/Row_2'
import { FooterReal } from './styled'


function FooterSide() {
  return (
      <FooterReal>
      <Row_1 />
      <Row_2/>
    </FooterReal>
  )
}

export default FooterSide
import React from 'react'
import { Item,Paragraph } from './styled'

function ColItem({ item }) {
    const {reqem,text}=item
  return (
    <Item>
      <h2>{reqem}</h2>
      <Paragraph>{text }</Paragraph>
    </Item>
  )
}

export default ColItem
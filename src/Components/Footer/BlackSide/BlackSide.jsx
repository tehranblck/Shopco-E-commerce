import React from 'react'
import Text from './Text/Text'
import Form from '../BlackSide/Form/Form'
import { BlackBox } from './styled'

function BlackSide() {
  return (
    <BlackBox>
      <Text />
      <Form/>
    </BlackBox>
  )
}

export default BlackSide
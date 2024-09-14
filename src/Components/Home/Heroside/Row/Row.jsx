import React from 'react'
import Col_1 from './Col_1/Col_1'
import Col_2 from './Col_2/Col_2'
import { Roww } from './styled'

function Row() {
  return (
      <Roww>
          <Col_1 />
          <Col_2/>
          
    </Roww>
  )
}

export default Row
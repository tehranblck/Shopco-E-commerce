import React from 'react'
import Col_1 from './col-1/Col_1'
import Col_2 from './col-2/Col_2'
import Col_3 from './col-3/Col_3'
import Col_4 from './col-4/Col_4'
import { Row } from './styled'
function Row_1() {
  return (
      <Row>
        <Col_1 />
        <Col_2 />
        <Col_3 />
        <Col_4/>
    </Row>
  )
}

export default Row_1
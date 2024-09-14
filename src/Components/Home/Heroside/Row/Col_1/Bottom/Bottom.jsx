import React from 'react'
import ColItem from './ColItem'
import { Container } from './styled'

function Bottom() {
    const data = [{
        id:1,
        reqem: "200 +",
        text: "International Brands",
      },
      {id:2,
        reqem: "150 +",
        text: "Local Brands",
      },
      {id:3,
        reqem: "300 +",
        text: "Global Partners",
      }]
  return (
      <Container>
          {
              data.map((item, index) => (
                  <ColItem item={item} key={index} />
              ))
          }
    </Container>
  )
}

export default Bottom
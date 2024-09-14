import React from 'react'
import { FourSquare } from 'react-loading-indicators'

function LoaderAnimation() {
  return (
      <div style={{height:"80vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <FourSquare color="#000000" size="large" text="" textColor="" />
    </div>
  )
}

export default LoaderAnimation
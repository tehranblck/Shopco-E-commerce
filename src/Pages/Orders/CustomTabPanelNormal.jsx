import React from 'react'

function CustomTabPanelNormal(props) {
    const{value,index,children}=props
  return (
      <div>
          {
              value===index&& children
          }
    </div>
  )
}

export default CustomTabPanelNormal
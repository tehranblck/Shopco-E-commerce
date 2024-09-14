import React from 'react'
import { ContainerTabs } from './styled'
import AddCard from './AddCard'

function CustomTabPanel(props) {
    const{value,index,children}=props
    return (
      value === 0 ? (
          <div style={{ display: 'flex', gap: "1rem" }}>
              <ContainerTabs>
                  <div>{children}</div>
              </ContainerTabs>
              <AddCard />
          </div>
      ) : null
  );

}

export default CustomTabPanel
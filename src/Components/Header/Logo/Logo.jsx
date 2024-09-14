import React from 'react'
import { LogoImg, ContainerLogo } from './styled'
import { useNavigate } from 'react-router-dom'

function Logo() {
  const navigate=useNavigate()
  return (
    <ContainerLogo onClick={() => navigate("/")}>
        <LogoImg src="/img/logoFullS.png" alt="" />
      </ContainerLogo>
  )
}

export default Logo
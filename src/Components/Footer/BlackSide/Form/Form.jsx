import React from 'react'
import { ContainerInput,InputText,Button } from './styled'

function Form() {
  return (
      <ContainerInput>
          <InputText type="text" placeholder='Enter your email adress'/>
          <Button type="submit" value="Subscribe to Newsletter" />
    </ContainerInput>
  )
}

export default Form
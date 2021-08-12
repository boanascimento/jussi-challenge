import React from 'react'
import { Container, Btn, Input } from './styles'

export const InputGreen: React.FC<any> = (props): JSX.Element => {
  return (
    <Container>
      <Input placeholder={'Digite seu e-mail'} />
      <Btn>CADASTRAR</Btn>
    </Container>
  )
}

import React from 'react'
import { Container } from './styles'
import { InputGreen } from '../../global/inputGreen'

export const Newsletter: React.FC = (): JSX.Element => {
  return (
    <Container>
      <h2>receba novidades da nossa área de produtos digitais.</h2>
      <InputGreen />
    </Container>
  )
}

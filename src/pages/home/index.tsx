import React from 'react'
import { Container, AppRoot } from './styles'
import { HeaderBar } from '../../components/headerBar'

export const HomePage: React.FC<any> = (): JSX.Element => {
  return (
    <Container>
      <AppRoot />
      <HeaderBar />
    </Container>
  )
}
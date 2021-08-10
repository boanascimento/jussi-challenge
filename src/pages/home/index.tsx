import React from 'react'
import { Container, AppRoot } from './styles'
import { HeaderBar } from '../../components/headerBar'
import { HeroBanner } from '../../components/heroBanner'
import { LogoBar } from '../../components/logoBar'
import { OurSolutions } from '../../components/ourSolutions'

export const HomePage: React.FC<any> = (): JSX.Element => {
  return (
    <Container>
      <AppRoot />
      <HeaderBar />
      <HeroBanner />
      <LogoBar />
      <OurSolutions />
    </Container>
  )
}

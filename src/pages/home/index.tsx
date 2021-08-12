import React from 'react'
import { Container, AppRoot } from './styles'
import { HeaderBar } from '../../components/local/headerBar'
import { HeroBanner } from '../../components/local/heroBanner'
import { LogoBar } from '../../components/local/logoBar'
import { OurSolutions } from '../../components/local/ourSolutions'
import { JussiSession } from '../../components/local/jussiSession'
import { ContactInfo } from '../../components/local/contactInfo'

export const HomePage: React.FC<any> = (): JSX.Element => {
  return (
    <Container>
      <AppRoot />
      <HeaderBar />
      <HeroBanner />
      <LogoBar />
      <OurSolutions />
      <JussiSession />
      <ContactInfo />
    </Container>
  )
}

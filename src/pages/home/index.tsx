import React from 'react'
import { Container, AppRoot } from './styles'
import { NavBar } from '../../components/local/navBar'
import { HeroBanner } from '../../components/local/heroBanner'
import { LogoBar } from '../../components/local/logoBar'
import { OurSolutions } from '../../components/local/ourSolutions'
import { JussiSession } from '../../components/local/jussiSession'
import { ContactInfo } from '../../components/local/contactInfo'
import { Newsletter } from '../../components/local/newsletter'
import { Footer } from '../../components/local/footer'

export enum HomePageIds {
  ourSolution = 'ourSolution',
  jussiSession = 'jussiSession',
}

export const HomePage: React.FC<any> = (): JSX.Element => {
  return (
    <Container>
      <AppRoot />
      <NavBar />
      <HeroBanner />
      <LogoBar />
      <OurSolutions id={HomePageIds.ourSolution} />
      <JussiSession id={HomePageIds.jussiSession} />
      <ContactInfo />
      <Newsletter />
      <Footer />
    </Container>
  )
}

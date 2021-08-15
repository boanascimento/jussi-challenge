import React from 'react'
import { LogoContent } from '../../global/logoContent'
import { Col1, Col2, Container } from './styles'
import wppCompany from '../../../assets/images/wppcompany.svg'
import facebook from '../../../assets/images/facebook.svg'
import instagram from '../../../assets/images/instagram.svg'
import linkedin from '../../../assets/images/linkedin.svg'

export const Footer: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Col1 width={6}>
        <LogoContent img={wppCompany} />
      </Col1>
      <Col2 width={6}>
        <a
          href={'https://www.facebook.com/agencia.jussi/'}
          target={'_blank'}
          rel='noreferrer'
        >
          <LogoContent img={facebook} />
        </a>
        <a
          href={'https://www.instagram.com/jussi/'}
          target={'_blank'}
          rel='noreferrer'
        >
          <LogoContent img={instagram} />
        </a>
        <a
          href={'https://www.linkedin.com/company/agencia-jussi/'}
          target={'_blank'}
          rel='noreferrer'
        >
          <LogoContent img={linkedin} />
        </a>
      </Col2>
    </Container>
  )
}

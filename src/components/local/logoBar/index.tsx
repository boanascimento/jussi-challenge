import React, { useState } from 'react'
import { LogoContent } from '../../global/logoContent'
import { Arrow, Container } from './styles'
import brastemp from '../../../assets/images/logo-brastemp.png'
import compraCerta from '../../../assets/images/logo-compra-certa.png'
import consul from '../../../assets/images/logo-consul.png'
import theBar from '../../../assets/images/logo-thebar.png'

export const LogoBar: React.FC = (): JSX.Element => {
  const logoList = [brastemp, compraCerta, consul, theBar]
  const [logos] = useState(() => {
    const elements: JSX.Element[] = []
    logoList.map((logo) => elements.push(<LogoContent img={logo} />))
    return elements
  })
  return (
    <Container>
      <p>Nossas principais lojas</p>
      <Arrow>→</Arrow>
      {logos}
    </Container>
  )
}

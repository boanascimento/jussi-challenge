import React from 'react'
import { Row } from '../../global/grid'
import { TransparentButton } from '../../global/transparentButton'
import { Container, Col1, Col2 } from './styles'
import jussiImg from '../../../assets/images/image-jussi.png'

export const JussiSession: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col1 width={6}>
          <h2>Olá, somos a Jüssi</h2>
          <p>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
          <TransparentButton text={'Conheça a Jüssi'} />
        </Col1>
        <Col2 width={6}>
          <img src={jussiImg} alt={'jussiImg'} />
        </Col2>
      </Row>
    </Container>
  )
}

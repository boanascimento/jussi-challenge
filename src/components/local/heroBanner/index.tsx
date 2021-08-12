import React from 'react'
import { Container, LeftContent, RightContent } from './styles'
import { TransparentButton } from '../../global/transparentButton'
import { ProductCard } from '../../global/productCard'
import freezer from '../../../assets/freezer.png'
import mixer from '../../../assets/mixer.png'
import jhonyWalker from '../../../assets/jhony-walker.png'

export const HeroBanner: React.FC = (): JSX.Element => {
  return (
    <Container>
      <LeftContent width={6}>
        <h1>CRIAMOS LOJAS QUE VENDEM MAIS.</h1>
        <p>
          A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
          Precisa criar sua loja ou migrar de plataforma?
        </p>
        <TransparentButton text={'Veja nossas soluções'} />
      </LeftContent>
      <RightContent width={6}>
        <ProductCard
          style={{
            top: '10rem',
            left: '10px',
            zIndex: 0,
          }}
          img={freezer}
          btnText={'Mais Detalhes'}
        />
        <ProductCard
          style={{
            top: '4rem',
            left: '8rem',
            zIndex: 2,
          }}
          img={mixer}
          btnText={'Comprar em 12x'}
        />
        <ProductCard
          style={{ top: '13rem', left: '16rem', zIndex: 1 }}
          img={jhonyWalker}
          btnText={'Adicionar à sacola'}
        />
      </RightContent>
    </Container>
  )
}

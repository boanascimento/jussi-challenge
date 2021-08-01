import React from 'react'
import {
  Container,
  Logo,
  LeftGroupButtons,
  ButtonMenu,
  RightGroupButtons,
  SearchContent,
  InputSearch,
  IconButton,
} from './styles'
import imgSearch from '../../assets/images/search.svg'
import imgShoppingCart from '../../assets/images/shoppingCart.svg'

export const HeaderBar: React.FC = (): JSX.Element => {
  return (
    <Container>
      <LeftGroupButtons>
        <Logo />
        <ButtonMenu>Nossas soluções</ButtonMenu>
        <ButtonMenu>Conheça a Jüssi</ButtonMenu>
      </LeftGroupButtons>
      <RightGroupButtons>
        <SearchContent>
          <InputSearch placeholder={'Buscar'} />
          <IconButton img={imgSearch} />
        </SearchContent>
        <ButtonMenu>Login</ButtonMenu>
        <IconButton img={imgShoppingCart} />
      </RightGroupButtons>
    </Container>
  )
}

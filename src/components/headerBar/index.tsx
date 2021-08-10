import React from 'react'
import {
  Container,
  Logo,
  LeftGroupButtons,
  ButtonMenu,
  RightGroupButtons,
  SearchContent,
  InputSearch,
} from './styles'
import imgSearch from '../../assets/images/search.svg'
import imgShoppingCart from '../../assets/images/shoppingCart.svg'
import { IconButton } from '../global/iconButton'

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
          <IconButton imgUrl={imgSearch} />
        </SearchContent>
        <ButtonMenu>Login</ButtonMenu>
        <IconButton imgUrl={imgShoppingCart} />
      </RightGroupButtons>
    </Container>
  )
}

import React, { useCallback, useState } from 'react'
import {
  Container,
  Logo,
  LeftGroupButtons,
  ButtonMenu,
  RightGroupButtons,
  SearchContent,
  InputSearch,
} from './styles'
import imgSearch from '../../../assets/images/search.svg'
import imgShoppingCart from '../../../assets/images/shoppingCart.svg'
import { IconButton } from '../../global/iconButton'
import { getGitUser } from '../../../service/gitUser'
import { useDispatch } from 'react-redux'
import { SetGitUser } from '../../../store/gitUser/actions'
import { HomePageIds } from '../../../pages/home'
import { ModalContainer } from '../../fora-do-escopo'

export const NavBar: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState<any>()

  const dispatch = useDispatch()

  const search = useCallback(async () => {
    try {
      const response = await getGitUser(searchValue)
      dispatch(SetGitUser(response.data))
      setOpen(true)
    } catch (error) {
      console.error('🚀  Bonny ~ search ~ error', error)
    }
  }, [dispatch, searchValue])

  const goToDivId = useCallback((elementId: string) => {
    const ele = document.getElementById(`${elementId}`)
    ele!.scrollIntoView()
  }, [])

  return (
    <Container>
      <LeftGroupButtons>
        <Logo />
        <ButtonMenu
          onClick={() => {
            goToDivId(HomePageIds.ourSolution)
          }}
        >
          Nossas soluções
        </ButtonMenu>
        <ButtonMenu
          onClick={() => {
            goToDivId(HomePageIds.jussiSession)
          }}
        >
          Conheça a Jüssi
        </ButtonMenu>
      </LeftGroupButtons>
      <RightGroupButtons>
        <SearchContent>
          <InputSearch
            placeholder={'Buscar'}
            onChange={(event) => {
              setSearchValue(event.target.value)
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') search()
            }}
          />
          <IconButton imgUrl={imgSearch} onClick={search} />
        </SearchContent>
        <ButtonMenu>Login</ButtonMenu>
        <IconButton imgUrl={imgShoppingCart} />
      </RightGroupButtons>

      {open && <ModalContainer setOpen={setOpen} />}
    </Container>
  )
}

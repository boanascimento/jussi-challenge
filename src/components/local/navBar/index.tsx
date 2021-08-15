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
    if (searchValue) {
      try {
        const response = await getGitUser(searchValue)
        dispatch(SetGitUser(response.data))
        setOpen(true)
      } catch (error) {
        if (error.response.status === 404)
          alert(`O usuário "${searchValue}" não existe!!`)
        else alert(`Ocorreu um erro, favor tentar novamente!`)
      }
    }
  }, [dispatch, searchValue])

  const goToDivId = useCallback((elementId: string) => {
    document.getElementById(`${elementId}`)!.scrollIntoView()
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
            hasValue={searchValue ? true : false}
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

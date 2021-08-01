import styled from 'styled-components'
import imgLogo from '../../assets/images/logoJussiVectorGreen.svg'
import { Colors, Default } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 20px;
  width: calc(100% - 40px);
  justify-content: space-between;
`

export const Logo = styled.button`
  background-image: url(${imgLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  height: 45px;
  width: 200px;
  background-color: transparent;
  border: none;
`

export const LeftGroupButtons = styled.div`
  flex-wrap: nowrap;
  flex-direction: row;
  display: flex;
  justify-self: flex-start;
  align-items: center;
`

export const RightGroupButtons = styled.div`
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
`

export const ButtonMenu = styled.button`
  border: none;
  transition: ${Default.transition};
  background-color: transparent;
  padding: 8px 20px;
  &:hover {
    background-color: ${Colors.greenJussi};
  }
`

export const SearchContent = styled.div`
  transition: ${Default.transition};
  border: 1px solid ${Colors.greyLight};
  border-radius: 50px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
`

export const InputSearch = styled.input`
  color: ${Colors.pinkJussi};
  background-color: transparent;
`

interface IIconButton {
  img: string
}
export const IconButton = styled.button<IIconButton>`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  height: 25px;
  width: 25px;
  background-color: transparent;
`

export {}

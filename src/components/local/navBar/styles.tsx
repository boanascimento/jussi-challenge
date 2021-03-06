import styled from 'styled-components'
import imgLogo from '../../../assets/images/logoJussiVectorGreen.svg'
import { BreakPoint, Colors, Default } from '../../../styles'

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 15px 20px;
  width: calc(100% - 40px);
  justify-content: space-between;

  @media screen and (max-width: ${BreakPoint.laptop}) {
    flex-direction: column;

    div {
      justify-content: space-around;
    }
  }
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
  margin: 0 10px;
  &:hover {
    background-color: ${Colors.greenJussi};
    cursor: pointer;
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

interface IInput {
  hasValue?: boolean
}
export const InputSearch = styled.input<IInput>`
  color: ${Colors.pinkJussi};
  background-color: transparent;
  transition: ${Default.transition};
  width: ${(props) => (props.hasValue ? '16rem' : '11rem')};

  :focus {
    width: 16rem;
  }
`

export {}

import styled from 'styled-components'

interface IButton {
  img: string
}
export const Button = styled.button<IButton>`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  height: 25px;
  width: 25px;
  background-color: transparent;
`

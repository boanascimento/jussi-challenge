import styled from 'styled-components'
import { Default } from '../../../styles'

export const Button = styled.button`
  border: 1px solid;
  border-radius: 6px;
  padding: 1.28rem 1.5rem;
  background-color: transparent;
  margin-top: 1rem;
  justify-self: flex-start;
  width: fit-content;
  transition: ${Default.transition};
  &:hover {
    background-color: white;
    border-color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  }
`

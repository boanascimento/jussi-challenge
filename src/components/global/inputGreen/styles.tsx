import styled from 'styled-components'
import { BreakPoint, Colors } from '../../../styles'

export const Container = styled.div`
  border-bottom: 1px solid ${Colors.greenJussi};
  width: 40%;

  @media screen and (max-width: ${BreakPoint.tablet}) {
    width: 60%;
  }
`

export const Btn = styled.button`
  color: ${Colors.greenJussi};
  width: 20%;
`

export const Input = styled.input`
  padding: 1rem 0;
  background-color: transparent;
  width: 80%;
  color: white;
`

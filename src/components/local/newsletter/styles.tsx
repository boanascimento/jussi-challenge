import styled from 'styled-components'
import { BreakPoint } from '../../../styles'

export const Container = styled.section`
  background-color: black;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    text-transform: uppercase;
    width: 40%;
    text-align: center;
  }

  @media screen and (max-width: ${BreakPoint.tablet}) {
    h2 {
      width: 60%;
    }
  }
`

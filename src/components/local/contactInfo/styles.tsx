import styled from 'styled-components'
import { BreakPoint, Colors } from '../../../styles'

export const Container = styled.div`
  background-color: ${Colors.pinkJussi};
  color: white;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2,
  p {
    text-align: center;
    width: 50%;
  }

  @media screen and (max-width: ${BreakPoint.tablet}) {
    h2,
    p {
      text-align: center;
      width: 70%;
    }
  }
`

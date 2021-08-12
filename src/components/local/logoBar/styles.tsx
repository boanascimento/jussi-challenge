import styled from 'styled-components'
import { BreakPoint, Colors } from '../../../styles'

export const Container = styled.div`
  background-color: ${Colors.greyLight};
  padding: 0.5rem 11rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${BreakPoint.laptop}) {
    flex-direction: column;
  }
`

export const Arrow = styled.div`
  padding: 0 1rem;
  margin: 0 1rem;
  font-size: 1rem;

  @media screen and (max-width: ${BreakPoint.laptop}) {
    padding: 2rem 0;
  }
`

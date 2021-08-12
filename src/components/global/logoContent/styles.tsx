import styled from 'styled-components'
import { BreakPoint } from '../../../styles'

export const Image = styled.img`
  padding: 0 2rem;

  @media screen and (max-width: ${BreakPoint.laptop}) {
    padding: 2rem 0;
  }
`

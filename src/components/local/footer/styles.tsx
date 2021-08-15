import styled from 'styled-components'
import { BreakPoint, Default } from '../../../styles'
import { Col } from '../../global/grid'

export const Container = styled.footer`
  display: flex;
  background-color: black;
  color: white;
  padding: 1.5rem 13%;
  @media screen and (max-width: ${BreakPoint.laptop}) {
    flex-direction: column;
  }
`

export const Col1 = styled(Col)`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  transition: ${Default.transition};
  img {
    width: 8rem;
  }

  @media screen and (max-width: ${BreakPoint.laptop}) {
    justify-content: center;
  }
`

export const Col2 = styled(Col)`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  transition: ${Default.transition};
  img {
    padding: 0 0.3rem;
  }

  @media screen and (max-width: ${BreakPoint.laptop}) {
    justify-content: center;
  }
`

import { Col } from '../../global/grid'
import styled from 'styled-components'
import { BreakPoint, Colors } from '../../../styles'

export const Container = styled.div``

export const Col1 = styled(Col)`
  padding: 3rem 0 3rem 10rem;
  align-items: flex-start;
  h2,
  p {
    width: 40%;
    text-align: left;
  }
  p {
    line-height: 1.5rem;
  }

  @media screen and (max-width: ${BreakPoint.laptop}) {
    align-items: center;
    padding: 3rem 0;
    h2,
    p {
      width: 60%;
      text-align: center;
    }
  }
`

export const Col2 = styled(Col)`
  padding: 3rem 10rem 3rem 0;
  background-color: ${Colors.greyLight};
  position: relative;

  img {
    position: absolute;
    left: -20%;
  }

  @media screen and (max-width: ${BreakPoint.laptop}) {
    padding: 3rem0;
    width: 100%;
    align-items: center;

    img {
      position: static;
      margin: auto;
      width: 60%;
    }
  }
`

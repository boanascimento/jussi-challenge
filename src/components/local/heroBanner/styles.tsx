import styled from 'styled-components'
import { BreakPoint, Colors, Default } from '../../../styles'
import { Col } from '../../global/grid'

export const Container = styled.header`
  display: flex;
  background-color: ${Colors.greenJussi};
  padding: 1rem 9rem;
  min-height: 35rem;
  transition: ${Default.transition};

  @media screen and (max-width: ${BreakPoint.laptop}) {
    flex-direction: column;
  }
`

export const LeftContent = styled(Col)`
  height: 100%;
  width: 40%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: ${Default.transition};

  h1 {
    font-size: 4rem;
  }
  h1,
  p {
    text-align: left;
  }

  @media screen and (max-width: ${BreakPoint.laptop}) {
    width: 100%;
    padding: 2rem 0;
    align-items: center;

    h1,
    p {
      text-align: center;
    }
  }
`

export const RightContent = styled(Col)`
  min-height: 35rem;
  width: 60%;
  position: relative;
  align-self: center;

  @media screen and (max-width: ${BreakPoint.laptop}) {
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
      position: static;
      margin: 2rem;
      min-width: 12rem;
    }
  }
`

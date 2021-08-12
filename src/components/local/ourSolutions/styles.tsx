import styled from 'styled-components'
import { BreakPoint, Colors, Default } from '../../../styles'

export const Container = styled.div`
  display: flex;
  transition: ${Default.transition};
  padding: 3rem 10rem;
  flex-direction: column;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  span {
    height: 2rem;
    margin: 1rem 0;
  }

  span {
    margin-right: 0.5rem;
    color: ${Colors.greenJussi};
    font-size: 2rem;
    font-weight: bold;
  }
`

export const ProductContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: ${BreakPoint.laptop}) {
    justify-content: space-around;
  }
`

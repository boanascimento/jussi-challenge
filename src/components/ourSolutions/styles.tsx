import styled from 'styled-components'
import { Colors, Default } from '../../styles'

export const Container = styled.div`
  display: flex;
  transition: ${Default.transition};
  padding: 3rem 10rem;
  flex-direction: column;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  span,
  h2 {
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
  margin-top: 2rem;
  justify-content: space-between;
`

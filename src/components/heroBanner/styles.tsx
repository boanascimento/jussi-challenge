import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  background-color: ${Colors.greenJussi};
  padding: 1rem 9rem;
`

export const LeftContent = styled.div`
  height: 100%;
  width: 40%;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 4rem;
  }
  h1,
  p {
    text-align: left;
  }
`

export const RightContent = styled.div`
  height: 100%;
  width: 60%;
  position: relative;
`

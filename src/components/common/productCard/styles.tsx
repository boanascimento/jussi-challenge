import styled from 'styled-components'
import { Colors } from '../../../styles'

export const Container = styled.div`
  background-color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  flex-direction: column;
  height: 18rem;
  width: 13rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border: 1px solid ${Colors.greyLight};
`

export const Image = styled.img``

export const Button = styled.button`
  padding: 1rem 1rem;
  border-radius: 3rem;
  border: 1px solid #ee0e7d;
  width: fit-content;
  bottom: 0;
`

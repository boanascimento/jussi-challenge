import styled from 'styled-components'
import { Colors } from '../../styles'

export const Modal = styled.div`
  max-width: 500px;
  min-width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  color: black;

  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
`

export const ModalContent = styled.div`
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;

  span,
  a {
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
  }
`

export const ModalFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`

export const ModalShadow = styled.div`
  position: fixed;
  left: -1rem;
  height: 100%;
  width: calc(100% + 2rem);
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`

export const ModalBanner = styled.div`
  margin-bottom: 20px;
  background-color: ${Colors.greenJussi};
  padding: 10px;
`

export const Avatar = styled.img`
  width: 5rem;
  border-radius: 0.5rem;
`

export const MainButton = styled.button``

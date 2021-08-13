import styled from 'styled-components'
import { BreakPoint, Colors } from '../../../styles'

export const Container = styled.div`
  width: 15rem;
  min-width: 15rem;
  border-radius: 0.25rem;
  border: 1px solid ${Colors.greyLight};
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-top: 2rem;

  @media screen and (max-width: ${BreakPoint.laptop}) {
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

export const Avatar = styled.div`
  font-size: 2rem;
  background-color: ${Colors.greyLight};
  width: 6.25rem;
  height: 6.25rem;
  line-height: 6.25rem;
  text-align: center;
  border-radius: 3.25rem;
  margin: 1rem;
`

export const ProductName = styled.p`
  font-size: 1rem;
  width: fit-content;
  margin: 1rem;
`

export const DescriptionName = styled.p`
  font-size: 0.75rem;
  color: ${Colors.pinkJussi};
  width: fit-content;
  margin: 1rem;
`

export const FeaturesContent = styled.div`
  color: ${Colors.greyDark};
  width: fit-content;
  li {
    line-height: 1.125rem;
    font-size: 0.75rem;
  }
`

export const ViewSolutionButton = styled.button`
  border-radius: 6px;
  padding: 1.28rem 1.5rem;
  background-color: ${Colors.greenJussi};
  margin: 1rem;
`

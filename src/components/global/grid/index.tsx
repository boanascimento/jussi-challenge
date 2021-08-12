import styled from 'styled-components'
import { BreakPoint, Default } from '../../../styles'

interface IRow {
  flexDirection?: string
}
export const Row = styled.div<IRow>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};

  @media screen and (max-width: ${BreakPoint.laptop}) {
    flex-direction: column;
  }
`

interface ICol {
  width?: number
}
export const Col = styled.div<ICol>`
  display: flex;
  width: ${(props) =>
    props?.width ? (props?.width * 8.3333).toString() + '%' : '100%'};
  flex-direction: column;
  transition: ${Default.transition};

  @media screen and (max-width: ${BreakPoint.laptop}) {
    width: 100%;
  }
`

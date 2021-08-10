import React from 'react'
import { Button, Container, Image } from './styles'

export interface IProductCardProps {
  img: string
  btnText: string
  style: any
}

export const ProductCard: React.FC<IProductCardProps> = (
  props,
): JSX.Element => {
  return (
    <Container style={props.style}>
      <Image src={props.img} />
      <Button>{props.btnText}</Button>
    </Container>
  )
}

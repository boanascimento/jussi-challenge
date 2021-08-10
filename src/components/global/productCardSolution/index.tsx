import React, { useState } from 'react'
import { IProduct } from '../../../service/types'
import {
  Container,
  Avatar,
  ProductName,
  DescriptionName,
  FeaturesContent,
  ViewSolutionButton,
} from './styles'

export const ProductCardSolution: React.FC<IProduct> = (props): JSX.Element => {
  const [features] = useState(() => {
    const elements: JSX.Element[] = []
    props.features.map((feature) => elements.push(<li>{feature}</li>))
    return elements
  })
  return (
    <Container>
      <Avatar>{props.avatar}</Avatar>
      <ProductName>{props.name}</ProductName>
      <DescriptionName>{props.description}</DescriptionName>
      <FeaturesContent>
        <ul>{features}</ul>
      </FeaturesContent>
      <ViewSolutionButton>Ver solução</ViewSolutionButton>
    </Container>
  )
}

import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Container, TitleContent, ProductContent } from './styles'
import { IProduct } from '../../../service/types'
import { Mock } from '../../../service/mock'
import { ProductCardSolution } from '../../global/productCardSolution'

interface IOurSolutionsProps {
  id: string
}

export const OurSolutions: React.FC<IOurSolutionsProps> = (
  props,
): JSX.Element => {
  const [productCard, setProductCards] = useState<JSX.Element[]>()

  const initProductCards = useCallback((products: IProduct[]): void => {
    let elements: JSX.Element[] = []
    products.map((product, i) =>
      elements.push(<ProductCardSolution {...product} key={i} />),
    )
    setProductCards(elements)
  }, [])

  const getProductList = useCallback(async () => {
    try {
      const response = await new Mock().getSolutions()
      initProductCards(response)
    } catch (error) {
      console.error('Jussi ~ getProductList ~ error', error)
    }
  }, [initProductCards])

  useLayoutEffect(() => {
    getProductList()
  }, [getProductList])
  return (
    <Container id={props.id}>
      <TitleContent>
        <span>//</span>
        <h2>NOSSAS SOLUÇÕES</h2>
      </TitleContent>
      <ProductContent>{productCard}</ProductContent>
    </Container>
  )
}

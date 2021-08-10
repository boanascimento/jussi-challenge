import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Container, TitleContent, ProductContent } from './styles'
import { IProduct } from '../../service/types'
import { Mock } from '../../service/mock'
import { ProductCardSolution } from '../global/productCardSolution'

interface IOurSolutionsProps {}

export const OurSolutions: React.FC<IOurSolutionsProps> = (): JSX.Element => {
  const [productCard, setProductCards] = useState<JSX.Element[]>()

  const initProductCards = useCallback((products: IProduct[]): void => {
    let elements: JSX.Element[] = []
    products.map((product) =>
      elements.push(<ProductCardSolution {...product} />),
    )
    setProductCards(elements)
  }, [])

  const getProductList = useCallback(async () => {
    try {
      const response = await new Mock().getSolutions()
      initProductCards(response)
    } catch (error) {
      console.log('🚀  Jussi ~ getProductList ~ error', error)
    }
  }, [initProductCards])

  useLayoutEffect(() => {
    getProductList()
  }, [getProductList])
  return (
    <Container>
      <TitleContent>
        <span>//</span>
        <h2>NOSSAS SOLUÇÕES</h2>
      </TitleContent>
      <ProductContent>{productCard}</ProductContent>
    </Container>
  )
}
